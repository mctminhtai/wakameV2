var express = require('express');
var router = express.Router();
var {
	getSignIn,
	postSignIn,
	validateSignInForm,
	getSignUp,
	postSignUp,
	validateSignUpForm,
} = require('../controllers/accounts/index');

router.get('/sign-in', getSignIn);
router.post('/sign-in', validateSignInForm, postSignIn);
router.get('/sign-up', getSignUp);
router.post('/sign-up', validateSignUpForm, postSignUp);
module.exports = router;
