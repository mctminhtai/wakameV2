const { Blogs } = require('../../../models/index');
exports.blogList = async function (req, res, next) {
	const blogs = await Blogs.find({}).sort({ status: 'desc', dateCreated: 'desc' });
	return res.render('admin/blog-list', { user: req.user, blogs });
};
