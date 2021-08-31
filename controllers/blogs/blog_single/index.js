var { Blogs } = require('../../../models/blogs');
exports.getBlogSingle = async function (req, res, next) {
	var blogId = req.params.blogid;
	var blog = await Blogs.findById(blogId)
		.populate({ path: 'category', select: 'name' })
		.populate({ path: 'userId', select: 'fullName' });
	console.log(blog);
	return res.render('blog-detail', { blog, user: req.user });
};
