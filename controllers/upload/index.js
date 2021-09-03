const { handleMultipleImages } = require('./handleMultipleImages');
const { upload } = require('./multerDefine');
const { HandleImage } = require('./handleImage');
const { responsePhoto } = require('./responseFile');
const { deleteFile } = require('./deleteFile');
module.exports = {
	handleMultipleImages,
	upload,
	HandleImage,
	responsePhoto,
	deleteFile,
};
