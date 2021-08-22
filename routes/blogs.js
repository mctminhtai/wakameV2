var express = require('express');
var router = express.Router();
var { blogGridIndex } = require('../controllers/blogs/blog_grid/index');
var { blogSingleIndex } = require('../controllers/blogs/blog_single/index');
var { blogEditIndex } = require('../controllers/blogs/blog_edit/index');
/* GET users listing. */
router.get('/', blogGridIndex);
router.get('/blog-detail', blogSingleIndex);
router.get('/blog-edit', blogEditIndex);

module.exports = router;
