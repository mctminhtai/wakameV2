const { handleMultipleFiles } = require('./handleMultipleFiles');
const { handleSingleFile } = require('./handleSingleFile');
const { upload } = require('./multerDefine');
const { HandleImage } = require('./handleImage');
const {responsePhoto,responsePhotos} = require('./responseFile');
module.exports = {
	handleSingleFile,
	handleMultipleFiles,
	upload,
    HandleImage,
    responsePhoto,
    responsePhotos
};
