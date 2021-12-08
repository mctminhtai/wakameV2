exports.indexMap = async function (req, res, next) {
	return res.render('map/index', {
		user: req.user,
	});
};
