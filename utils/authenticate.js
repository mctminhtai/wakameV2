exports.privateRoute = function (req, res, next) {
	if (req.isAuthenticated()) {
		next();
	}
	res.redirect('/accounts/sign-in');
};
exports.retrictedRoute = function (req, res, next) {
	if (req.isAuthenticated()) {
		res.redirect('/');
	}
	next();
};
