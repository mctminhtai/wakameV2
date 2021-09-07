var express = require('express');
var router = express.Router();
var { getHomepage, userInfo,userInfoEdit,userList } = require('../controllers/admin/index');
/* GET home page. */
router.get('/', getHomepage);
router.get('/userInfo', userInfo);
router.get('/userInfoEdit', userInfoEdit);
router.get('/userList', userList);

module.exports = router;
