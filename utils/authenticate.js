exports.privateRoute = function (req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	return res.redirect('/accounts/sign-in');
};
exports.retrictedRoute = function (req, res, next) {
	if (req.isAuthenticated()) {
		return res.redirect('/');
	}
	return next();
};
