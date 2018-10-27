let api = require('../api')
let wecryptojs = require('wecryptojs')
let validators = require('./validators.js')
import { key_utils } from '../auth/ecc'

/** merge with this */
if(this){
	Object.assign(this, validators)
}

let	createAccount = function({
	accountCreatorAccountUsername,
	signingPrivateKey,
	useSigningPrivateKeyAsMasterPasswordGen,
	TMEpayable,
	SCOREpayable,
	autopay = "yes",
	delegatedMethod,
	delegatedMethodFallback = "yes",
	newAccountUsername,
	autoAccountUsername,
	newAccountMasterPassword,
	newAccountMasterPasswordGen,
	ownerPub,
	postingPub,
	activePub,
	memoPub,
	json,
	callback,
	matchWithCreator
}={}){
	return new Promise((resolve, reject)=>{
		/** 
		 * @required @arg @type {String} signingPrivateKey the private key of the account creator in order to sign the transaction
		 * @arg @type {String} newAccountMasterPasswordGen @default is @var {String ""} is a boolean intended value for if we want keys generated if none are provided
		 * @arg @type {String} useSigningPrivateKeyAsMasterPasswordGen @default is @var {String ""} is a boolean intended value for if we want keys generated if none are provided
		 * @arg @type {String} delegatedMethod @default is @var {String ""} is a boolean intended value for if we want the account to be created through delegation of SCORE instead of fee payment
		 * @arg @type {String} delegatedMethodFallback @default is @var {String "yes"} is a boolean intended value for if we want the account to be created through delegation of SCORE instead of fee payment
		 * @arg @type {String} autopay @default is @var {String "yes"} is a boolean intended value for if we want the fee to be paid automatically by checking the account balance
		 * @arg @type {String} matchWithCreator @default is @var {String ""} will broadcast the account creation request to the network and try to match with a sugar daddy
		 * @returns @type {Object} @var { account, privateKeys }
		 */
		validate(arguments, reject)

		fillGaps(arguments)
		.then(ret=>{

		})
		.catch(err=>{
			console.error("error in catch of fillGaps in createAccount", err)
			reject(err)
		})
		let newAccount = handleKeys(arguments)

	})

	function validate(args, reject){
		if(!signingPrivateKey && !matchWithCreator){ 
			reject({err: 'you need to provide the signingPrivateKey of the account creator who pays the fee', success: false})
		}
		if(!newAccountUsername && !autoAccountUsername){
			reject({err: 'you need to provide an account name to be created or opt-in to get a randomly generated account username via autoAccountUsername argument', success: false})
		}
		if(!TMEpayable && !SCOREpayable && !autopay && !matchWithCreator){
			reject({err: 'someone needs to pay for this account, you haven\'t provided any TME, SCORE, or set autopay to true, or opted to try and match with a sugar daddy', success: false})
		}
		if(!checkKeys(args) && !newAccountMasterPassword && !newAccountMasterPasswordGen){
			reject({err: 'the new account needs public keys and the inputs provided do not allow that because you have not provided all public keys or a newAccountMasterPassword or opted into auto generating a newAccountMasterPassword via newAccountMasterPasswordGen', success: false})
		}
	}
}

let fillGaps = function(args){
	init(args, this)
	/** ifs
	 * @var {0}
	 * @template if the @var newAccountUsername isn't present
	 * @template do check @template if @var autoAccountUsername is set then generate a username
	 * @var {0.1}
	 * @template if the @var autoAccountUsername is set to @arg {String "human"}
	 * @template do @template generate a username based off human readable words like Reddit, Gyfcat does
	 * @var {0.2}
	 * @template if the @var autoAccountUsername is set to @arg {String "wallet"}
	 * @template do @template generate a hash username
	 * @var {0.3}
	 * @template if the @var autoAccountUsername evaluates to @arg {Boolean true}
	 * @template do @template generate a hash username
	 * @var {1}
	 * @template if the public keys are not complete
	 * @template do set the missing public keys to any one of the other provided public keys in this priority order @var ownerPub @var postingPub @var activePub @var memoPub
	 * @var {2}
	 * @template if the public keys are not provided at all 
	 * @template do check @template if @var newAccountMasterPassword was provided and generate public keys based off that 
	 * @var {2.1}
	 * @template if the public keys are not provided at all and the newAccountMasterPassword is not provided
	 * @template do check @template if @var useSigningPrivateKeyAsMasterPasswordGen was provided and generate public keys based off that 
	 * @var {2.2}
	 * @template if the public keys are not provided at all and the useSigningPrivateKeyAsMasterPasswordGen is not provided
	 * @template do check @template if @var newAccountMasterPasswordGen was provided and generate private master password and all other keys based off that and return them
	 * @var {3}
	 * @template if @var TMEpayable @template and @var SCOREpayable do not add up to the required fee needed
	 * @template do check @template if @var autopay was provided and check if account has sufficient balances required and modify @var TMEpayable @var SCOREpayable values appropriately
	 * @var {4}
	 * @template if @var TMEpayable @template and @var SCOREpayable do not add up to the required fee needed
	 * @template do check @template if @var autopay was provided and check if account has sufficient balances required and modify @var TMEpayable @var SCOREpayable values appropriately
	 */
		let promises = []
		usernameCheck(args)
		.then(args=>{
			init(args, this)
			
		})
		.catch(err=>{
			console.error("error in username check", err)
			reject(err)
		})
		Promise.all([])

}
let generateUsername = function(args){
	init(args, this)
	return new Promise((resolve, reject)=>{
		username = wecryptojs.sha256()
		resolve(username)
	})
}
let usernameCheck = function(args){
	init(args, this)
	return new Promise((resolve, reject)=>{
		if(!newAccountUsername){
			if(autoAccountUsername){
				if(enums[autoAccountUsername] == enums["human"]){
					generateUsername({type: autoAccountUsername})
					.then(username=>{
						args.newAccountUsername = username
						resolve(args)
					})
					.catch(err=>{
						console.error("error: ", err)
						reject(err)
					})
				} else if(enums[autoAccountUsername] == enums["wallet"]){
					generateUsername({type: autoAccountUsername})
					.then(username=>{
						args.newAccountUsername = username
						resolve(args)
					})
					.catch(err=>{
						console.error("error: ", err)
						reject(err)
					})
				} else {

				}
			}
		} else {
			resolve(true)
		}
	})
}
let handleKeys = function(args){

}
let collateKeys = function(args){
	let keys = {}
	let wanted = mainKeys
		for(key in args){
			if(wanted.includes(key)){
				keys[key] = args[key]
			}
		}
		return keys
}
let checkKeys = function(args){

}
let init = function(args, that){
	Object.keys(args).forEach((key) => {
    Object.defineProperty(that, key, {
        value: args[key]
    });
	});
}

var mainKeys = [
	'ownerPub',
	'postingPub',
	'activePub',
	'memoPub'
]
var errors = [
]
var enums = {
	"human": 1,
	"wallet": 2,
	"yes": 3,
	"no": 4
}

let createSuggestedPassword = () => {
  const PASSWORD_LENGTH = 32;
  const privateKey = key_utils.get_random_key();
  return privateKey.toWif().substring(3, 3 + PASSWORD_LENGTH);
};

module.exports = this