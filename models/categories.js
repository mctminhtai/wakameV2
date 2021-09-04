var mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
	name: { type: String, required: true, unique: true },
	description: { type: String, required: true },
	dateCreated: { type: Date, default: new Date() },
	dateUpdated: { type: Date, default: new Date() },
});

categorySchema.virtual('blogs', {
	ref: 'Blogs',
	localField: '_id',
	foreignField: 'category',
});


categorySchema.set('toObject', { virtuals: true });
categorySchema.set('toJSON', { virtuals: true });

exports.Categories = mongoose.model('Categories', categorySchema);
