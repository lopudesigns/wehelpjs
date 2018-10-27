require('@babel/polyfill')
const api = require('./api');
const auth = require('./auth');
const help = require('./help');
const broadcast = require('./broadcast');
const formatter = require('./formatter')(api);
const memo = require('./auth/memo');
const config = require('./config');
const utils = require('./utils');
const operations = require('./operations')
const weauth = require('./weauth')
const validators = require('./help/validators')

let exp = {
  api,
  auth,
  broadcast,
  formatter,
  memo,
  config,
	utils,
	help,
	operations,
	weauth,
	validators
};

// for(var prop in exp){
// 	Object.assign(exp, exp[prop])
// }

module.exports = exp
