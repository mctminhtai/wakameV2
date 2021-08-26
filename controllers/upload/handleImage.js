var { Images } = require('../../models/index');
const fs = require('fs');
exports.HandleImage = async function (req, res, next) {
	const file = req.file;
	if (!file) {
		const error = new Error('Please choose files');
		error.httpStatusCode = 400;
		return next(error);
	}

	var img = fs.readFileSync(file.path, 'base64');
	var imgBuffer = Buffer.from(img, 'base64');
	let uploadImg = new Images({
		contentType: file.mimetype,
		image: imgBuffer,
	});
	fs.unlink(file.path, function (err) {
		if (err) console.error(err);
	});
	let newImgList = await uploadImg.save();
	let responseImg = { location: `/upload/photo/${newImgList._id}` };
	res.status(201).json(responseImg);
};
