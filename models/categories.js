var mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
	name: { type: String, required: true, unique: true },
	description: { type: String, required: true },
	dateCreated: { type: Date, default: new Date() },
	dateUpdated: { type: Date, default: new Date() },
});

exports.Categories = mongoose.model('Categories', categorySchema);
