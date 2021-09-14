const multer = require('multer');
const fs = require("fs");
var storage = multer.diskStorage({
	destination: function(req,file,cb){
		if(fs.existsSync('./filesUploaded')){
			// console.log('Da ton tai folder roi');
		}else{
			fs.mkdirSync('./filesUploaded');
			// console.log('da tao thanh cong folder');
		}
		cb(null, './filesUploaded');
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now());
	},
});

var upload = multer({ storage: storage });

module.exports = {upload}