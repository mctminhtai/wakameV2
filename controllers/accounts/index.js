var {
	getSignIn,
	postSignIn,
	validateSignInForm,
	getResetPassword,
	postResetEmail,
	validatepostResetEmail,
	getChangePwd,
	validatepostChangePwd,
	postChangePwd,
} = require('./sign-in');
var { getSignUp, postSignUp, validateSignUpForm, verifyAccount } = require('./sign-up');
module.exports = {
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
};
