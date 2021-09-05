exports.signOut = function (req, res, next) {
	req.logout();
	return res.redirect('/');
};
