const { Blogs } = require('../../../models/index');
exports.reactiveBlog = async function (req, res, next) {
	blogId = req.params.id ?? '';
	const blog = await Blogs.findById(blogId);
	if (!blog.status) {
		await Blogs.findByIdAndUpdate(blogId, { status: true }, { new: true });
	}
	res.redirect('/admin/blogList');
};
