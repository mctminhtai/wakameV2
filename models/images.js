var mongoose = require('mongoose');
const imageSchema = mongoose.Schema({
	contentType: { type: String, default: 'image/jpeg' },
	image: { type: Buffer },
	dateCreated: { type: Date, default: new Date() },
	dateUpdated: { type: Date, default: new Date() },
});

exports.Images = mongoose.model('Images', imageSchema);
