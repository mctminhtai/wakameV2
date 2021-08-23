var mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
	name: { type: String, required: true, unique: true },
	description: { type: String, required: true },
	dateCreated: { type: Date, default: new Date() },
	dateUpdated: { type: Date, default: new Date() },
});

exports.Tags = mongoose.model('Tags', tagSchema);
