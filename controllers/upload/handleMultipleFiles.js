exports.handleMultipleFiles = function(req,res,next){
    const files = req.files;
	if (!files) {
		const error = new Error('Please choose files');
		error.httpStatusCode = 400;
		return next(error);
	}

	res.redirect('/upload');
}