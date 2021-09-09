const { Comments } = require('../../../models/index');
exports.postComment = async function (req, res, next) {
	const blogId = req.params.id;
	const content = req.body.content.trim();

	if (!content) {
		return res.send('da xay ra loi');
	}
	await Comments.create({
		content,
		user: req.user._id,
		blog: blogId,
	});
	return res.redirect('/blog/blog-detail/' + blogId);
};
