var { Images } = require('../../models/index');
const fs = require('fs');
exports.handleMultipleImages = async function (req, res, next) {
	const files = req.files;
	if (!files) {
		const error = new Error('Please choose files');
		error.httpStatusCode = 400;
		return next(error);
	}
	console.log(files);
	let imgList = files.map((file,index)=>{
		var img = fs.readFileSync(file.path, 'base64');
		let uploadImg = new Images({
			contentType: file.mimetype,
			image: img,
		});
		fs.unlink(file.path, function (err) {
			if (err) console.error(err);
		});
		return uploadImg.save();
	})
	let newImgList = await Promise.all(imgList);
	let responseList = newImgList.map((img, index)=>{
		return {location:`/upload/photo/${img._id}`}
	});

	res.status(201).json(responseList);
};
