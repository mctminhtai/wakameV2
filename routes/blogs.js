var express = require('express');
var router = express.Router();
var { blogGridIndex, blogsSearch,blogsSearchByCategory,blogsSearchByTag } = require('../controllers/blogs/blog_grid/index');
var { getBlogSingle } = require('../controllers/blogs/blog_single/index');



/* GET users listing. */
router.get('/', blogGridIndex);


router.get('/blog-detail/:blogid', getBlogSingle);
router.get('/blog-search', blogsSearch);
router.get('/blog-search/category/:id', blogsSearchByCategory);
router.get('/blog-search/tag/:id', blogsSearchByTag);


module.exports = router;
