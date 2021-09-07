const { getHomepage } = require('./Homepage');
const { userInfo } = require('./user-info');
const { userInfoEdit } = require('./user-info-edit');
const { userList } = require('./user-list');
const { blogList } = require('./blog-list');

module.exports = {
	getHomepage,
	userInfo,
	userInfoEdit,
	userList,
	blogList,
};
