var { Images } = require('../../../models/index');
exports.deleteFileOnDataBase = async function (fileId) {
	const deletedImg = await Images.findByIdAndDelete(fileId);
	return deletedImg._id;
};
