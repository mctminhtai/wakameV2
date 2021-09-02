var express = require('express');
var router = express.Router();
var { getContact } = require('../controllers/contact/index');
/* GET home page. */
router.get('/', getContact);

module.exports = router;
