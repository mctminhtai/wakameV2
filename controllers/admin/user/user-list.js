var { Users } = require('../../../models/index');
exports.userList = async function (req, res, next) {
	const users = await Users.find({});
	return res.render('admin/user/user-list', { user: req.user, users });
};

exports.disableUserToggle = async function (req, res, next) {
	const userId = req.params.id;
	await Users.findByIdAndUpdate(userId, [{ $set: { status: { $not: '$status' } } }]);
	return res.redirect('/admin/userList');
};
