var { Images } = require('../../models/index');

exports.responsePhoto = function (req, res, next) {
	var filename = req.params.id;

	Images.findById(filename, (err, result) => {
		if (err) return console.log(err);
        var imgBuffer = Buffer.from(result.image, 'base64');
		res.writeHead(200, {
			'Content-Type': result.contentType,
		});
		res.end(imgBuffer);
	});
};
