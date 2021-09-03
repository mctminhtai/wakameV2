var { Images } = require('../../../models/index');
const fs = require('fs');
exports.saveMultiFile = async function (files) {
	let imgList = files.map((file, index) => {
		var img = fs.readFileSync(file.path, 'base64');
		let uploadImg = new Images({
			contentType: file.mimetype,
			image: img,
		});
		fs.unlink(file.path, function (err) {
			if (err) console.error(err);
		});
		return uploadImg.save();
	});
	let newImgList = await Promise.all(imgList);
	let response = newImgList.map((img, index) => {
		return { location: `/upload/photo/${img._id}` };
	});
	return response;
};
