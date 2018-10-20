import * as operation from './operations.js'

let isTransactionFormatValid = function(transaction){
	if (Array.isArray(transaction)) {
		for (let i = 0; i < transaction.length; i += 1) {
			if (!Array.isArray(transaction[i]) || transaction[i].length < 2) {
				return false;
			}
		}
		return true;
	}
	return false;
}

module.exports = this