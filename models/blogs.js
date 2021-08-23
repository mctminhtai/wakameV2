var mongoose = require('mongoose');
const { Categories } = require('./categories');
const { Tags } = require('./tags');
const { Users } = require('./users');

const blogSchema = mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	body: { type: String, required: true },
	userId: {type: mongoose.Schema.Types.ObjectId, ref: Users},
	category: {type:mongoose.Schema.Types.ObjectId, ref: Categories},
	tags:{ type:[mongoose.Schema.Types.ObjectId],ref:Tags},
	dateCreated: { type: Date, default: new Date() },
	dateUpdated: { type: Date, default: new Date() },
	status: { type: Boolean, default: false },
});

exports.Blogs = mongoose.model('Blogs', blogSchema);
