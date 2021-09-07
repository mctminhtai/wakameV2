exports.userList = function (req, res, next) {
	return res.render('admin/user-list', { user: req.user });
};
