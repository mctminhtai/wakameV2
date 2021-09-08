const { Blogs, Tags, Categories } = require('../../../models/index');
exports.blogsSearchByTag = async function (req, res, next) {
	const tagId = req.params.id;

	let paginationUrl = req.originalUrl;
	if (paginationUrl.indexOf('?page=') > -1) {
		paginationUrl = paginationUrl.slice(0, paginationUrl.indexOf('?page=') + 6);
	} else {
		paginationUrl = paginationUrl + '?page=';
	}

	let [searchBlogs, popularBlogs, tags, categories] = await Promise.all([
		Tags.findById(tagId).populate({ path: 'blogs', populate: { path: 'tags' } }),
		Blogs.find({status:true}).populate({ path: 'category', select: 'name' }).sort({ readCount: 'desc' }),
		Tags.find({}),
		Categories.find({}),
	]);
	blogs = searchBlogs.blogs;

	let itemPerPage = 8;
	let pageCount = Math.ceil(blogs.length / itemPerPage);
	if (req.query.page) {
		if (req.query.page > pageCount) {
			return res.redirect(paginationUrl + '1');
		}
		if (req.query.page < 1) {
			return res.redirect(paginationUrl + pageCount);
		}
	}

	let currentPage = req.query.page || 1;
	let begin = (currentPage - 1) * itemPerPage;
	let end = currentPage * itemPerPage;
	return res.render('blog-grid', {
		blogs: blogs.slice(begin, end),
		tags,
		categories,
		user: req.user,
		pagination: { pageCount, currentPage },
		popularBlogs,
		paginationUrl,
	});
};
