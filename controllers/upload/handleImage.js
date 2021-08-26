var { Images } = require('../../models/index');
const fs = require('fs');
exports.HandleImage = async function (req, res, next) {
	var img = fs.readFileSync(req.file.path, 'base64');
	var imgBuffer = Buffer.from(img, 'base64');
	var finalImg = new Images({
		contentType: req.file.mimetype,
		image: imgBuffer,
	});
    var savedImg = await finalImg.save();
    fs.unlink(req.file.path, function (err) {
		if (err) console.error(err);
	});
	// res.writeHead(200, {
	// 	'Content-Type': req.file.mimetype,
	// });
	// res.end(imgBuffer);
    // res.redirect(`/upload/photo/${savedImg._id}`);
    res.status(200).json({ location: `${req.headers.origin}/upload/photo/${savedImg._id}` });
};
