var { Users } = require('../../models/index');
var bcrypt = require('bcryptjs');
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;
var validator = require('validator');
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
		return res.redirect('/accounts/sign-up');
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
	console.log(result);
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
