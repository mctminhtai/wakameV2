var { getEditBlog, postEditBlog, getAddBlogAlbum, postAddBlogAlbum, redirectToUpload } = require('./add-blog');
var { blogList } = require('./blog-list');
var { deleteBlog } = require('./delete-blog');
var { reactiveBlog } = require('./reactive-blog');
module.exports = {
	getEditBlog,
	postEditBlog,
	getAddBlogAlbum,
	postAddBlogAlbum,
	redirectToUpload,
	blogList,
	deleteBlog,
	reactiveBlog,
};
