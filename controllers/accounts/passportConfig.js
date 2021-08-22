var passport = require('passport');
var { Users } = require('../../models/index');
passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	Users.findById(id, function (err, user) {
		done(err, user);
	});
});
