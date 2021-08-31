var { Blogs,Categories,Tags } = require('../../../models/index');
exports.getBlogSingle = async function (req, res, next) {
	var blogId = req.params.blogid;
	// var blog = await Blogs.findById(blogId)
	// 	.populate({ path: 'category', select: 'name' })
	// 	.populate({ path: 'userId', select: 'fullName' });
	var [blogs, tags, categories,blog] = await Promise.all([
		Blogs.find({}, 'title description category').populate({ path: 'category', select: 'name' }),
		Tags.find({}),
		Categories.find({}),
		Blogs.findById(blogId).populate({ path: 'category', select: 'name' }).populate({ path: 'userId', select: 'fullName' }),
	]);
	return res.render('blog-detail', { blog, blogs, tags, categories, user: req.user });
};
