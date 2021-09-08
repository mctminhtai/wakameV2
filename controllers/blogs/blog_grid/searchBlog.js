const { multiSearch } = require('../../../utils/multiSearch');
const { Blogs, Tags, Categories } = require('../../../models/index');
exports.blogsSearch = async function (req, res, next) {
	let words = req.query.searchString ? req.query.searchString : [];
	let paginationUrl = req.originalUrl;
	if (paginationUrl.indexOf('&&page=') > -1) {
		paginationUrl = paginationUrl.slice(0, paginationUrl.indexOf('&&page=') + 7);
	} else {
		paginationUrl = paginationUrl + '&&page=';
	}
	let [blogs, tags, categories] = await Promise.all([
		Blogs.find({status:true}, 'title description category dateCreated readCount thumbImg')
			.populate({ path: 'category', select: 'name' })
			.sort({ dateCreated: 'desc' }),
		Tags.find({}),
		Categories.find({}),
	]);
	let popularBlogs = [...blogs].sort((a, b) => {
		return b.readCount - a.readCount;
	});
	console.log(words.length);
	if (!words.length) {
		blogs = [];
	} else {
		blogs = blogs.filter((blog, index) => {
			return multiSearch(blog.title, words, 0.5) || multiSearch(blog.description, words, 0.7);
		});
	}

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
