var { Images } = require('../../../models/index');
const fs = require('fs');
exports.saveFile = async function (file) {
	var img = fs.readFileSync(file.path, 'base64');
	let uploadImg = new Images({
		contentType: file.mimetype,
		image: img,
	});
	fs.unlink(file.path, function (err) {
		if (err) console.error(err);
	});
	let newImg = await uploadImg.save();
	let response = { location: `/upload/photo/${newImg._id}`, ObjectId: newImg._id };
	return response;
};
