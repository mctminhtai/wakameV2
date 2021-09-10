var mongoose = require('mongoose');
const roleSchema = mongoose.Schema({
	dateCreated: { type: Date, default: new Date() },
	dateUpdated: { type: Date, default: new Date() },
	name: { type: String, required: true },
	description: {type: String}
});

exports.Roles = mongoose.model('Roles', roleSchema);
