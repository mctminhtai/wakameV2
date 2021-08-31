var express = require('express');
var router = express.Router();
var { index } = require('../controllers/home/index');
var routeAuthenticate = require('../utils/authenticate');
/* GET home page. */
router.get('/', index);

module.exports = router;
