var { Blogs, Categories, Tags } = require('../../../models/index');
exports.getBlogSingle = async function (req, res, next) {
	var blogId = req.params.blogid;
	var [popularBlogs, tags, categories, blog] = await Promise.all([
		Blogs.find({}, 'title description category')
			.populate({ path: 'category', select: 'name' })
			.sort({ readCount: 'desc' }),
		Tags.find({}),
		Categories.find({}),
		Blogs.findById(blogId)
			.populate({ path: 'category', select: 'name' })
			.populate({ path: 'userId', select: 'fullName' }),
	]);
	await Blogs.findByIdAndUpdate(blogId, { readCount: blog.readCount + 1 });
	return res.render('blog-detail', { blog, popularBlogs, tags, categories, user: req.user });
};
