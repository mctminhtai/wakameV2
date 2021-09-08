var { getAddBlog, postAddBlog, getAddBlogAlbum, postAddBlogAlbum, redirectToUpload } = require('./add-blog');
var { blogList } = require('./blog-list');
var { deleteBlog } = require('./delete-blog');
var { reactiveBlog } = require('./reactive-blog');
var { getEditBlog, postEditBlog } = require('./edit-blog');
module.exports = {
	getAddBlog,
	postAddBlog,
	getAddBlogAlbum,
	postAddBlogAlbum,
	redirectToUpload,
	blogList,
	deleteBlog,
	reactiveBlog,
	getEditBlog,
	postEditBlog,
};
