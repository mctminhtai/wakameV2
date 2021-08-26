const { handleMultipleImages } = require('./handleMultipleImages');
const { upload } = require('./multerDefine');
const { HandleImage } = require('./handleImage');
const {responsePhoto} = require('./responseFile');
module.exports = {
	handleMultipleImages,
	upload,
    HandleImage,
    responsePhoto,
};
