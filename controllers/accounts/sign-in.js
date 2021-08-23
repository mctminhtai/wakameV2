var { Users } = require('../../models/index');
var bcrypt = require('bcryptjs');
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;
var validator = require('validator');
var { sendMail } = require('../../utils/mailer');
var { resetPwdTemplate } = require('../../constants/email-template');
const randostring = require('randostrings/server');
const randomString = new randostring();
passport.use(
	'local.signin',
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
				if (!user) {
					return done(null, false, { message: 'can not found this account' });
				}
				if (!user.status) {
					return done(null, false, { message: 'You can not login before verify account' });
				}
				bcrypt.compare(password, user.password, (err, isExactly) => {
					if (err) {
						return done(err);
					}
					if (!isExactly) {
						return done(null, false, { message: 'wrong password' });
					}
					return done(null, user);
				});
			});
		}
	)
);

exports.getSignIn = function (req, res, next) {
	res.render('sign-in', { message: '' });
};
exports.postSignIn = function (req, res, next) {
	passport.authenticate('local.signin', (err, user, info) => {
		if (err) {
			return next(err);
		}
		if (!user) {
			return res.render('sign-in', { message: info.message });
		}
		req.logIn(user, (err) => {
			if (err) return next(err);
			if (!req.body.rememberMe) {
				req.session.cookie.maxAge = 1800000;
			}
			console.log(req.session);
			return res.redirect('/');
		});
	})(req, res, next);
};
exports.validateSignInForm = function (req, res, next) {
	var { email, password } = req.body;
	var result = [
		validator.isEmail(email),
		!validator.isEmpty(email),
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
	return res.render('sign-in', { message: 'Please check your input value' });
};
exports.getResetPassword = function (req, res, next) {
	return res.render('reset-password', { message: '' });
};
exports.postResetEmail = function (req, res, next) {
	Users.findOne({ email: req.body.email }, function (err, user) {
		if (err) {
			throw err;
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
		var resetPwdUrl = req.headers.origin + '/accounts/' + 'reset-password/' + randToken;
		sendMail(user.email, 'Reset password', resetPwdTemplate(resetPwdUrl));
		res.render('notify', {
			title: 'Congratulations!',
			message: 'Email has been sent to your email address, please check your email',
			url: '/accounts/sign-in',
		});
	});
};
exports.validatepostResetEmail = function (req, res, next) {
	var { email } = req.body;
	var result = [validator.isEmail(email), !validator.isEmpty(email)];
	var isValid = true;
	result.forEach((value, index) => {
		if (value === false) {
			return (isValid = false);
		}
	});
	if (isValid) {
		return next();
	}
	return res.render('reset-password', { message: 'Please check your input form' });
};
exports.getChangePwd = function (req, res, next) {
	if (req.params.token === req.session.verifyInfo.token) {
		return res.render('change-password', { message: '' });
	}
};
exports.postChangePwd = function (req, res, next) {
	if (req.params.token === req.session.verifyInfo.token) {
		bcrypt.hash(req.body.password, 12, (err, hashpwd) => {
			if (err) {
				return done(err);
			}
			Users.findByIdAndUpdate(req.session.verifyInfo.id, { password: hashpwd }, { new: true }, (err, doc) => {
				if (err) {
					throw err;
				}
				return res.render('notify', {
					title: 'Congratulations!',
					message: 'Your password has been reset',
					url: '/accounts/sign-in',
				});
			});
		});
	} else {
		return res.send('Some thing when wrong');
	}
};
exports.validatepostChangePwd = function (req, res, next) {
	var { password, confirmPassword } = req.body;
	var result = [
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
	return res.render('change-password', { message: 'Please check your input form' });
};
