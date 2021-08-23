var express = require('express');
var router = express.Router();
var { blogGridIndex } = require('../controllers/blogs/blog_grid/index');
var { getBlogSingle } = require('../controllers/blogs/blog_single/index');
var { getAddBlog,postAddBlog } = require('../controllers/blogs/blog_edit/index');
/* GET users listing. */
router.get('/', blogGridIndex);
router.get('/blog-add', getAddBlog);
router.post('/blog-add', postAddBlog);
router.get('/blog-detail/:blogid',getBlogSingle);


module.exports = router;
