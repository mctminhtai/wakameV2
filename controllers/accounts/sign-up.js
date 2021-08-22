var { Users } = require('../../models/index');
var bcrypt = require('bcryptjs');
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;
var validator = require('validator');

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
						console.log(user);
						return done(null, user);
					});
				});
			});
		}
	)
);
exports.getSignUp = function (req, res, next) {
	res.render('sign-up', { message: '' });
};
exports.postSignUp = function (req, res, next) {
	passport.authenticate('local.signup', (err, user, info) => {
		if (err) {
			return next(err);
		}
		if (!user) {
			return res.render('sign-up', { message: 'already exist account, please sign in' });
		}
		return res.redirect('/accounts/sign-in');
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
	console.log(result);
	result.forEach((value, index) => {
		if (value === false) {
			return (isValid = false);
		}
	});
	if (isValid) {
		return next();
	}
	return res.render('sign-up', { message: 'Please check your input form' });
};
