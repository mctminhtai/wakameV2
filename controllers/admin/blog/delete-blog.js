const { Blogs } = require('../../../models/index');
exports.deleteBlog = async function (req, res, next) {
	blogId = req.params.id ?? '';
	const blog = await Blogs.findById(blogId);
	if (blog.status) {
		await Blogs.findByIdAndUpdate(blogId, { status: false }, { new: true });
	} else {
		await Blogs.findByIdAndDelete(blogId);
	}
	res.redirect('/admin/blogList');
};
