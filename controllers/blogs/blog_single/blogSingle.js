var { Blogs, Categories, Tags } = require('../../../models/index');
exports.getBlogSingle = async function (req, res, next) {
	var blogId = req.params.blogid;
	var [popularBlogs, tags, categories, blog] = await Promise.all([
		Blogs.find({}, 'title description category dateCreated')
			.populate({ path: 'category', select: 'name' })
			.sort({ readCount: 'desc' }),
		Tags.find({}),
		Categories.find({}),
		Blogs.findById(blogId)
			.populate({ path: 'category', select: 'name' })
			.populate({ path: 'userId', select: 'fullName' })
			.populate({ path: 'comments', populate: { path: 'user' } }),
	]);

	await Blogs.findByIdAndUpdate(blogId, { readCount: blog.readCount + 1 });

	//chuyen tu id qua URL cho tung buc anh
	const newImgList = blog.images.map((id, index) => {
		return '/upload/photo/' + id;
	});

	blog.images = newImgList;

	// console.log(blog.images);
	return res.render('blog-detail', {
		blog,
		popularBlogs,
		tags,
		categories,
		user: req.user,
		csrfToken: req.csrfToken(),
	});
};
