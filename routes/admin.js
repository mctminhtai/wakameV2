var express = require('express');
var routeAuthenticate = require('../utils/authenticate');
var router = express.Router();
var { getHomepage, userInfo, userInfoEdit, userList, blogList } = require('../controllers/admin/index');
var {
	getAddBlogAlbum,
	postAddBlogAlbum,
	redirectToUpload,
	getEditBlog,
	postEditBlog,
} = require('../controllers/admin/blog_edit/index');
/* GET home page. */
router.get('/', getHomepage);

router.get('/blog-add', routeAuthenticate.privateRoute, redirectToUpload);
router.get('/blog-add/upload-file', routeAuthenticate.privateRoute, getAddBlogAlbum);
router.post('/blog-add/upload-file', routeAuthenticate.privateRoute, postAddBlogAlbum);
router.get('/blog-add/:id', routeAuthenticate.privateRoute, getEditBlog);
router.post('/blog-add/:id', routeAuthenticate.privateRoute, postEditBlog);


router.get('/userInfo', userInfo);
router.get('/userInfoEdit', userInfoEdit);
router.get('/userList', userList);
router.get('/blogList', blogList);

module.exports = router;
