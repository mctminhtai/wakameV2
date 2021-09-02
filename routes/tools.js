var express = require('express');
var router = express.Router();
var { getTools } = require('../controllers/tools/index');
/* GET home page. */
router.get('/', getTools);

module.exports = router;
