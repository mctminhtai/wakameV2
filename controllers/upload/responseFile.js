var { Images } = require('../../models/index');
exports.responsePhotos = function (req, res, next) {
	db.collection('mycollection')
		.find()
		.toArray((err, result) => {
			const imgArray = result.map((element) => element._id);
			console.log(imgArray);

			if (err) return console.log(err);
			res.send(imgArray);
		});
};
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
