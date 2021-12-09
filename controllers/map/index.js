exports.indexMap = async function (req, res, next) {
	if (req.user && req.user.role.name === 'admin') {
		return res.render('map/admin-map', {
			user: req.user,
		});
	}
	return res.render('map/user-map', {
		user: req.user,
	});
};
