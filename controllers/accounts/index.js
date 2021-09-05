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
var { signOut } = require('./sign-out');
module.exports = {
	getSignIn,
	postSignIn,
	signOut,
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
