var express = require('express');
var router = express.Router();
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
} = require('../controllers/accounts/index');

router.get('/sign-in', getSignIn);
router.post('/sign-in', validateSignInForm, postSignIn);
router.get('/sign-up', getSignUp);
router.post('/sign-up', validateSignUpForm, postSignUp);
router.get('/log-out', function (req, res) {
	req.logout();
	res.redirect('/');
});
router.get('/verify', verifyAccount);
router.get('/verify/:token', verifyAccount);
router.get('/reset-password', getResetPassword);
router.post('/reset-password', validatepostResetEmail, postResetEmail);
router.get('/reset-password/:token', getChangePwd);
router.post('/reset-password/:token', validatepostChangePwd, postChangePwd);
module.exports = router;
