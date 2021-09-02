var { Blogs, Tags, Categories } = require('../../../models/index');
const blogGridIndex = async function (req, res, next) {
	var [blogs, tags, categories] = await Promise.all([
		Blogs.find({}, 'title description category dateUpdated readCount')
			.populate({ path: 'category', select: 'name' })
			.sort({ dateUpdated: 'desc' }),
		Tags.find({}),
		Categories.find({}),
	]);
	var popularBlogs = [...blogs].sort((a, b) => {
		return b.readCount - a.readCount;
	});
	console.log(popularBlogs);
	var itemPerPage = 8;
	var pageCount = Math.ceil(blogs.length / itemPerPage);
	if (req.query.page) {
		if (req.query.page > pageCount) {
			return res.redirect('/blog?page=1');
		}
		if (req.query.page < 1) {
			return res.redirect('/blog?page=' + pageCount);
		}
	}
	var currentPage = req.query.page || 1;
	var begin = (currentPage - 1) * itemPerPage;
	var end = currentPage * itemPerPage;

	return res.render('blog-grid', {
		blogs: blogs.slice(begin, end),
		tags,
		categories,
		user: req.user,
		pagination: { pageCount, currentPage },
		popularBlogs,
	});
};
module.exports = {
	blogGridIndex,
};
