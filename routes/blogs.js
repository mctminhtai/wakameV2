var express = require('express');
var router = express.Router();
var { blogGridIndex, blogsSearch } = require('../controllers/blogs/blog_grid/index');
var { getBlogSingle } = require('../controllers/blogs/blog_single/index');
var {
	getAddBlogAlbum,
	postAddBlogAlbum,
	redirectToUpload,
	getEditBlog,
	postEditBlog,
} = require('../controllers/blogs/blog_edit/index');
var routeAuthenticate = require('../utils/authenticate');

/* GET users listing. */
router.get('/', blogGridIndex);
router.get('/blog-add', routeAuthenticate.privateRoute, redirectToUpload);
router.get('/blog-add/upload-file', routeAuthenticate.privateRoute, getAddBlogAlbum);
router.post('/blog-add/upload-file', routeAuthenticate.privateRoute, postAddBlogAlbum);
router.get('/blog-add/:id', routeAuthenticate.privateRoute, getEditBlog);
router.post('/blog-add/:id', routeAuthenticate.privateRoute, postEditBlog);

router.get('/blog-detail/:blogid', getBlogSingle);
router.get('/blog-search', blogsSearch);

module.exports = router;
