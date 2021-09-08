var { Blogs } = require('../../models/index');
exports.index = async function (req, res, next) {
	let lastedBlogs = await Blogs.find({ status: true }, 'title description category dateCreated readCount thumbImg')
		.populate({ path: 'category', select: 'name' })
		.sort({ dateCreated: 'desc' });
	lastedBlogs = lastedBlogs.slice(0, 3);
	res.render('index', { user: req.user, blogs: lastedBlogs });
};
