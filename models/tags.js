var mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
	name: { type: String, required: true, unique: true },
	description: { type: String, required: true },
	dateCreated: { type: Date, default: new Date() },
	dateUpdated: { type: Date, default: new Date() },
});
tagSchema.virtual('blogs', {
	ref: 'Blogs',
	localField: '_id',
	foreignField: 'tags',
});

tagSchema.set('toObject', { virtuals: true });
tagSchema.set('toJSON', { virtuals: true });

exports.Tags = mongoose.model('Tags', tagSchema);
