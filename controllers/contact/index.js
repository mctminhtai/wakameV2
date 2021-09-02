exports.getContact = function (req, res, next) {
	res.render('contact', { user: req.user });
};
