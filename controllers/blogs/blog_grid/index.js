var { Blogs, Tags, Categories } = require('../../../models/index');
var { blogsSearch } = require('./searchBlog');
const blogGridIndex = async function (req, res, next) {
	let paginationUrl = req.originalUrl;
	if (paginationUrl.indexOf('?page=') > -1) {
		paginationUrl = paginationUrl.slice(0, paginationUrl.indexOf('?page=') + 6);
	} else {
		paginationUrl = paginationUrl + '?page=';
	}
	var [blogs, tags, categories] = await Promise.all([
		Blogs.find({}, 'title description category dateCreated readCount thumbImg')
			.populate({ path: 'category', select: 'name' })
			.sort({ dateCreated: 'desc' }),
		Tags.find({}),
		Categories.find({}),
	]);
	var popularBlogs = [...blogs].sort((a, b) => {
		return b.readCount - a.readCount;
	});
	// console.log(popularBlogs);
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
		paginationUrl,
	});
};
module.exports = {
	blogGridIndex,
	blogsSearch,
};
