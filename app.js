var createError = require('http-errors');
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
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
var contactRouter = require('./routes/contact');
var toolsRouter = require('./routes/tools');
var adminRouter = require('./routes/admin');
var mapRouter = require('./routes/arcgismap');

var redis = require('redis');
var redisStore = require('connect-redis')(session);
// var redisClient = redis.createClient();
var redisClient = redis.createClient(process.env.REDIS_URL);

var app = express();
const sess = {
	secret: process.env.SESSION_SECRET_KEY,
	store: new redisStore({
		client: redisClient,
	}),
	saveUninitialized: false,
	resave: false,
	cookie: {
		secure: false,
		maxAge: 259200000,
	},
};
// if (app.get('env') === 'production') {
// 	sess.cookie.secure = true;
// }
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(logger('dev'));
app.use(express.json({ limit: '150mb' }));
app.use(express.urlencoded({ extended: true, limit: '150mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', homeRouter);
app.use('/blog', blogsRouter);
app.use('/accounts', accountsRouter);
app.use('/upload', uploadFileRouter);
app.use('/contact', contactRouter);
app.use('/tools', toolsRouter);
app.use('/admin', adminRouter);
app.use('/map', mapRouter);

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

module.exports = app;
