var express = require('express');
var router = express.Router();
var {
	handleMultipleImages,
	upload,
	HandleImage,
	responsePhoto,
} = require('../controllers/upload/index');

/* GET home page. */
router.get('/', (req, res, next) => {
	res.render('uploadFile');
});
router.post('/multiplePhoto',upload.array('files', 32), handleMultipleImages);
router.post('/photo', upload.single('file'), HandleImage);
router.get('/photo/:id', responsePhoto);

module.exports = router;
