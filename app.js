var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var session = require('express-session');
const mongoose = require('mongoose');
const connection = require('./models/dbConfig').connection;

require('dotenv').config();

var homeRouter = require('./routes/home');
var blogsRouter = require('./routes/blogs');
var accountsRouter = require('./routes/accounts');
var uploadFileRouter = require('./routes/uploads');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true,limit:'50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
	session({
		secret: process.env.SESSION_SECRET_KEY,
		saveUninitialized: false,
		resave: false,
		cookie: { secure: false },
	})
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', homeRouter);
app.use('/blog', blogsRouter);
app.use('/accounts', accountsRouter);
app.use('/upload', uploadFileRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});
connection();
// mongoose.connect(process.env.CONNECTION_URL, {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// 	useFindAndModify: false,
// 	useCreateIndex: true,
// });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
// 	// we're connected!
// 	console.log('we are connected!');
// });
module.exports = app;
