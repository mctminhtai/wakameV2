var mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	email: { type: String, required: true },
	password: { type: String, required: true },
	fullName: { type: String, required: true },
	dateCreated: { type: Date, default: new Date() },
	dateUpdated: { type: Date, default: new Date() },
	status: { type: Boolean, default: false },
	phoneNumber: { type: String, default: '' },
});

exports.Users = mongoose.model('Users', userSchema);
