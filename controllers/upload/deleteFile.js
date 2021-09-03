const { deleteFileOnDataBase } = require('./saveOnMongo/index');
exports.deleteFile = async function (req, res, next) {
	const imgId = req.params.id;
	const deleteImg = await deleteFileOnDataBase(imgId);
    return res.send(deleteImg);
};
