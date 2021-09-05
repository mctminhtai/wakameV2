exports.userInfo = function (req, res, next) {
	res.render('admin/user-info', { user: req.user });
};
