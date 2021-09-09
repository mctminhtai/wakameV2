var express = require('express');
var routeAuthenticate = require('../utils/authenticate');
var router = express.Router();
var { getHomepage } = require('../controllers/admin/dashboard/index');
var { userInfo, userInfoEdit, userList, disableUserToggle } = require('../controllers/admin/user/index');
var {
	getAddBlogAlbum,
	postAddBlogAlbum,
	redirectToUpload,
	getAddBlog,
	postAddBlog,
	blogList,
	deleteBlog,
	reactiveBlog,
	getEditBlog,
	postEditBlog,
} = require('../controllers/admin/blog/index');
/* GET home page. */
router.get('/', getHomepage);

router.get('/blog-add', routeAuthenticate.privateRoute, redirectToUpload);
router.get('/blog-add/upload-file', routeAuthenticate.privateRoute, getAddBlogAlbum);
router.post('/blog-add/upload-file', routeAuthenticate.privateRoute, postAddBlogAlbum);
router.get('/blog-add/:id', routeAuthenticate.privateRoute, getAddBlog);
router.post('/blog-add/:id', routeAuthenticate.privateRoute, postAddBlog);
router.get('/delete-blog/:id', routeAuthenticate.privateRoute, deleteBlog);
router.get('/reactive-blog/:id', routeAuthenticate.privateRoute, reactiveBlog);
router.get('/edit-blog/:id', routeAuthenticate.privateRoute, getEditBlog);
router.post('/edit-blog/:id', routeAuthenticate.privateRoute, postEditBlog);

router.get('/userInfo/:id', routeAuthenticate.privateRoute, userInfo);
router.get('/userInfoEdit', routeAuthenticate.privateRoute, userInfoEdit);
router.get('/userList', routeAuthenticate.privateRoute, userList);
router.get('/userList/delete-user/:id', routeAuthenticate.privateRoute, disableUserToggle);
router.get('/blogList', routeAuthenticate.privateRoute, blogList);

module.exports = router;
