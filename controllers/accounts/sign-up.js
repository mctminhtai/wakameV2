var { Users } = require('../../models/index');
var bcrypt = require('bcryptjs');
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;
var validator = require('validator');
var { sendMail } = require('../../utils/mailer');
var { verifyAccountTemplate } = require('../../constants/email-template');
const randostring = require('randostrings/server');
const randomString = new randostring();

passport.use(
	'local.signup',
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true,
			session: true,
		},
		function (req, username, password, done) {
			Users.findOne({ email: username }, function (err, user) {
				if (err) {
					return done(err);
				}
				if (user) {
					return done(null, false);
				}
				// if (!user.validPassword(password)) {
				// 	return done(null, false);
				// }
				bcrypt.hash(password, 12, (err, hashpwd) => {
					if (err) {
						return done(err);
					}
					const newUser = new Users({
						email: username.toLowerCase(),
						password: hashpwd,
						fullName: req.body.fullName,
					});
					newUser.save().then((user) => {
						return done(null, user);
					});
				});
			});
		}
	)
);
passport.serializeUser(function (user, done) {
	done(null, user._id);
});

passport.deserializeUser(function (id, done) {
	Users.findById(id, function (err, user) {
		done(err, user);
	}).populate({ path: 'role', select: 'name' });
});
exports.getSignUp = function (req, res, next) {
	res.render('sign-up', { message: '', user: req.user });
};
exports.postSignUp = function (req, res, next) {
	passport.authenticate('local.signup', (err, user, info) => {
		if (err) {
			return next(err);
		}
		if (!user) {
			return res.render('sign-up', { message: 'already exist account, please sign in', user: req.user });
		}
		var randToken = randomString.password({
			length: 100,
			string: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
		});
		req.session.verifyInfo = {
			id: user._id,
			token: randToken,
			exprires: Date.now() + 60000,
		};
		var verifyUrl = req.headers.origin + '/accounts/' + 'verify/' + randToken;
		sendMail(user.email, 'Please verify your account', verifyAccountTemplate(verifyUrl));
		return res.render('sign-up', { message: 'Please verify your account', user: req.user });
	})(req, res, next);
};
exports.validateSignUpForm = function (req, res, next) {
	var { email, password, fullName, confirmPassword } = req.body;
	var result = [
		validator.isEmail(email),
		!validator.isEmpty(email),
		validator.equals(password, confirmPassword),
		!validator.isEmpty(password),
		validator.isStrongPassword(password, {
			minLength: 8,
			minLowercase: 1,
			minUppercase: 0,
			minNumbers: 0,
			minSymbols: 0,
			returnScore: false,
			pointsPerUnique: 1,
			pointsPerRepeat: 0.5,
			pointsForContainingLower: 10,
			pointsForContainingUpper: 10,
			pointsForContainingNumber: 10,
			pointsForContainingSymbol: 10,
		}),
	];
	var isValid = true;
	result.forEach((value, index) => {
		if (value === false) {
			return (isValid = false);
		}
	});
	if (isValid) {
		return next();
	}
	return res.render('sign-up', { message: 'Please check your input form', user: req.user });
};
exports.verifyAccount = function (req, res, next) {
	if (!req.params.token) {
		return res.redirect('/');
	}
	if (!req.session.verifyInfo) {
		return res.render('notify', { title: 'OOPS', message: 'Please check your email again', url: '/' });
	}
	if (Date.now() > req.session.verifyInfo.exprires) {
		return res.render('notify', { title: 'OOPS', message: 'time out for activate', url: '/' });
	}
	if (req.session.verifyInfo.token === req.params.token) {
		Users.findByIdAndUpdate(req.session.verifyInfo.id, { status: true }, { new: true }, (err, doc) => {
			if (err) {
				throw err;
			}
			req.session.verifyInfo;
			return res.render('notify', {
				title: 'Congratulations!',
				message: 'Your account is activated',
				url: '/accounts/sign-in',
				user: req.user
			});
		});
	}
};
