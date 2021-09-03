var { saveFile } = require('./saveOnMongo/index');

exports.HandleImage = async function (req, res, next) {
	const file = req.file;
	if (!file) {
		const error = new Error('Please choose files');
		error.httpStatusCode = 400;
		return next(error);
	}

	const response = await saveFile(file);
	res.status(201).json(response);
};
