var express = require('express');
var router = express.Router();
var {
	handleMultipleFiles,
	handleSingleFile,
	upload,
	HandleImage,
	responsePhoto,
	responsePhotos,
} = require('../controllers/upload/index');

/* GET home page. */
router.get('/', (req, res, next) => {
	res.render('uploadFile');
});
// router.post('/singleFile', upload.single('myFile'), handleSingleFile);
// router.post('/multipleFile', upload.array('myFiles', 12), handleMultipleFiles);
// router.get('/photos', responsePhotos);
router.post('/photo', upload.single('myImage'), HandleImage);
router.get('/photo/:id', responsePhoto);

module.exports = router;
