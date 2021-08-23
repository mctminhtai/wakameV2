var { Blogs } = require('../../../models/index');
const blogGridIndex = async function (req, res, next) {
	var blogs = await Blogs.find({}, 'title description category').populate({ path: 'category', select: 'name' });
	return res.render('blog-grid', { blogs });
};
module.exports = {
	blogGridIndex,
};
