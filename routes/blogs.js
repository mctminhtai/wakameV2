var express = require('express');
var router = express.Router();
var {
	blogGridIndex,
	blogsSearch,
	blogsSearchByCategory,
	blogsSearchByTag,
} = require('../controllers/blogs/blog_grid/index');
var { getBlogSingle, postComment } = require('../controllers/blogs/blog_single/index');
var csrf = require('csurf');
var csrfProtection = csrf({ cookie: true });

/* GET users listing. */
router.get('/', blogGridIndex);

router.get('/blog-detail/:blogid', csrfProtection, getBlogSingle);
router.post('/blog-detail/:id', csrfProtection, postComment);
router.get('/blog-search', blogsSearch);
router.get('/blog-search/category/:id', blogsSearchByCategory);
router.get('/blog-search/tag/:id', blogsSearchByTag);

module.exports = router;
