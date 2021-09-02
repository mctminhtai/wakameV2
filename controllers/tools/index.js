exports.getTools = function (req, res, next) {
	res.render('tools', { user: req.user });
};
