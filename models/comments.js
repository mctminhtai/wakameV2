var mongoose = require('mongoose');
const { Blogs } = require('./blogs');
const { Users } = require('./users');
const commentSchema = mongoose.Schema({
	dateCreated: { type: Date, default: new Date() },
	dateUpdated: { type: Date, default: new Date() },
	content: { type: String, required: true },
	user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: Users },
	blog: { type: mongoose.Schema.Types.ObjectId, required: true, ref: Blogs },
	// reply: { type: [mongoose.Schema.Types.ObjectId], ref: this.Comments },
});

exports.Comments = mongoose.model('Comments', commentSchema);
