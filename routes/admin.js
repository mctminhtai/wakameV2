var express = require('express');
var routeAuthenticate = require('../utils/authenticate');
var router = express.Router();
var { getHomepage } = require('../controllers/admin/dashboard/index');
var { userInfo, userInfoEdit, userList } = require('../controllers/admin/user/index');
var {
	getAddBlogAlbum,
	postAddBlogAlbum,
	redirectToUpload,
	getEditBlog,
	postEditBlog,
	blogList,
	deleteBlog,
	reactiveBlog,
} = require('../controllers/admin/blog/index');
/* GET home page. */
router.get('/', getHomepage);

router.get('/blog-add', routeAuthenticate.privateRoute, redirectToUpload);
router.get('/blog-add/upload-file', routeAuthenticate.privateRoute, getAddBlogAlbum);
router.post('/blog-add/upload-file', routeAuthenticate.privateRoute, postAddBlogAlbum);
router.get('/blog-add/:id', routeAuthenticate.privateRoute, getEditBlog);
router.post('/blog-add/:id', routeAuthenticate.privateRoute, postEditBlog);
router.get('/delete-blog/:id', routeAuthenticate.privateRoute, deleteBlog);
router.get('/reactive-blog/:id', routeAuthenticate.privateRoute, reactiveBlog);

router.get('/userInfo', userInfo);
router.get('/userInfoEdit', userInfoEdit);
router.get('/userList', userList);
router.get('/blogList', blogList);

module.exports = router;
