const mongoose = require('mongoose');
exports.connection = async function () {
	try {
		await mongoose.connect(process.env.CONNECTION_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		});
		console.log('Connected to database');
		// const db = mongoose.connection;
		// db.on('error', console.error.bind(console, 'connection error:'));
		// db.once('open', function () {
		// 	// we're connected!
		// 	console.log('we are connected!');
		// });
	} catch (error) {
		console.log(error);
		console.log('Could not connected to database');
	}
};
