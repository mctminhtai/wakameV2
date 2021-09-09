const { Users } = require('../../../models/index');
exports.userInfo = async function (req, res, next) {
	const userId = req.params.id;
	const user = await Users.findById(userId);
	// can query lai de sau nay co the de dang populate
	return res.render('admin/user/user-info', { user });
};
