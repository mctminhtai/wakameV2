var express = require('express');
var router = express.Router();
var { indexMap } = require('../controllers/map/index');
router.get('/', indexMap);
module.exports = router;
