const { Roles } = require('../../models/index');
exports.getTools = async function (req, res, next) {
	await Roles.create({
		name:'admin',
		description:'website setting and control'
	})
	await Roles.create({
		name:'member',
		description:'use website as normal user'
	})
	res.render('tools', { user: req.user });
};
