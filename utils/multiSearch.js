const { removeVI } = require('jsrmvi');
const vntk = require('vntk');
const tokenizer = vntk.wordTokenizer();
const util = vntk.util();
exports.multiSearch = function (text, searchWords, accu) {
    // console.log(text);
	text = removeVI(text, { concatBy: ' ' });
	searchWords = tokenizer.tag(searchWords);
	searchWords = searchWords.map((word, index) => {
		return removeVI(word, { concatBy: ' ' });
	});
	let matched = 0;
	for (let i = 0; i < searchWords.length; i++) {
        // console.log(text, text.indexOf(searchWords[i]));
		if (text.indexOf(searchWords[i]) >= 0) {
            // console.log(searchWords[i]);
			matched += 1;
		}
	}
	result = matched / searchWords.length;
	// console.log(result);
	if (result >= accu) {
		return true;
	}
	return false;
};
