var express = require('express');
var router = express.Router();
var { getHomepage, userInfo } = require('../controllers/admin/index');
/* GET home page. */
router.get('/', getHomepage);
router.get('/userInfo', userInfo);

module.exports = router;
