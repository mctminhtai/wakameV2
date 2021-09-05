var express = require('express');
var router = express.Router();
var routeAuthenticate = require('../utils/authenticate');
var {
	getSignIn,
	postSignIn,
	validateSignInForm,
	getSignUp,
	postSignUp,
	validateSignUpForm,
	verifyAccount,
	getResetPassword,
	postResetEmail,
	validatepostResetEmail,
	getChangePwd,
	validatepostChangePwd,
	postChangePwd,
	signOut,
} = require('../controllers/accounts/index');

router.get('/sign-in', routeAuthenticate.retrictedRoute, getSignIn);
router.post('/sign-in', routeAuthenticate.retrictedRoute, validateSignInForm, postSignIn);
router.get('/sign-up', routeAuthenticate.retrictedRoute, getSignUp);
router.post('/sign-up', routeAuthenticate.retrictedRoute, validateSignUpForm, postSignUp);
router.get('/sign-out', routeAuthenticate.privateRoute, signOut);
router.get('/verify', routeAuthenticate.retrictedRoute, verifyAccount);
router.get('/verify/:token', routeAuthenticate.retrictedRoute, verifyAccount);
router.get('/reset-password', routeAuthenticate.retrictedRoute, getResetPassword);
router.post('/reset-password', routeAuthenticate.retrictedRoute, validatepostResetEmail, postResetEmail);
router.get('/reset-password/:token', routeAuthenticate.retrictedRoute, getChangePwd);
router.post('/reset-password/:token', routeAuthenticate.retrictedRoute, validatepostChangePwd, postChangePwd);
module.exports = router;
