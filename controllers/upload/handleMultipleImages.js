const { saveMultiFile } = require('./saveOnMongo/index');
exports.handleMultipleImages = async function (req, res, next) {
	console.log(req.files);
	const files = req.files;
	if (!files) {
		const error = new Error('Please choose files');
		error.httpStatusCode = 400;
		return next(error);
	}
	const response = await saveMultiFile(files);
	res.status(201).json(response);
};
