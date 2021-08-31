var { Blogs,Tags,Categories } = require('../../../models/index');
const blogGridIndex = async function (req, res, next) {
	var [blogs,tags,categories] = await Promise.all([
		Blogs.find({}, 'title description category').populate({ path: 'category', select: 'name' }),
		Tags.find({}),
		Categories.find({}),
	]);
	return res.render('blog-grid', { blogs,tags,categories, user: req.user });
};
module.exports = {
	blogGridIndex,
};
