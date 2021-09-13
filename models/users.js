var mongoose = require('mongoose');
const { Roles } = require('./roles');

const userSchema = mongoose.Schema({
	email: { type: String, required: true },
	password: { type: String, required: true },
	fullName: { type: String, required: true },
	dateCreated: { type: Date, default: new Date() },
	dateUpdated: { type: Date, default: new Date() },
	status: { type: Boolean, default: false },
	phoneNumber: { type: String, default: 'chưa có' },
	role: { type: mongoose.Schema.Types.ObjectId, default: '613acb1bdf840239f5078391',ref: Roles},
});

exports.Users = mongoose.model('Users', userSchema);
