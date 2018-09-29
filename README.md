[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/WeYouMe/wehelpjs/blob/master/LICENSE)

# wehelpjs
wehelpjs the JavaScript API for WeYouMe blockchain

# Documentation

- [Install](https://github.com/WeYouMe/wehelpjs/tree/master/doc#install)
- [Browser](https://github.com/WeYouMe/wehelpjs/tree/master/doc#browser)
- [Config](https://github.com/WeYouMe/wehelpjs/tree/master/doc#config)
- [Database API](https://github.com/WeYouMe/wehelpjs/tree/master/doc#api)
    - [Subscriptions](https://github.com/WeYouMe/wehelpjs/tree/master/doc#subscriptions)
    - [Tags](https://github.com/WeYouMe/wehelpjs/tree/master/doc#tags)
    - [Blocks and transactions](https://github.com/WeYouMe/wehelpjs/tree/master/doc#blocks-and-transactions)
    - [Globals](https://github.com/WeYouMe/wehelpjs/tree/master/doc#globals)
    - [Keys](https://github.com/WeYouMe/wehelpjs/tree/master/doc#keys)
    - [Accounts](https://github.com/WeYouMe/wehelpjs/tree/master/doc#accounts)
    - [Market](https://github.com/WeYouMe/wehelpjs/tree/master/doc#market)
    - [Authority / validation](https://github.com/WeYouMe/wehelpjs/tree/master/doc#authority--validation)
    - [Votes](https://github.com/WeYouMe/wehelpjs/tree/master/doc#votes)
    - [Content](https://github.com/WeYouMe/wehelpjs/tree/master/doc#content)
    - [Witnesses](https://github.com/WeYouMe/wehelpjs/tree/master/doc#witnesses)
- [Login API](https://github.com/WeYouMe/wehelpjs/tree/master/doc#login)
- [Follow API](https://github.com/WeYouMe/wehelpjs/tree/master/doc#follow-api)
- [Broadcast API](https://github.com/WeYouMe/wehelpjs/tree/master/doc#broadcast-api)
- [Broadcast](https://github.com/WeYouMe/wehelpjs/tree/master/doc#broadcast)
- [Auth](https://github.com/WeYouMe/wehelpjs/tree/master/doc#auth)


Here is full documentation:
https://github.com/WeYouMe/wehelpjs/tree/master/doc

## Browser
```html
<script src="./wehelpjs.min.js"></script>
<script>
wehelpjs.api.getAccounts(['ned', 'dan'], function(err, response){
    console.log(err, response);
});
</script>
```

## CDN
https://cdn.WeYouMe.io/lib/latest/wehelpjs.min.js<br/>
```html
<script src="//cdn.WeYouMe.io/lib/latest/wehelpjs.min.js"></script>
```

## Webpack
[Please have a look at the webpack usage example.](https://github.com/WeYouMe/wehelpjs/blob/master/examples/webpack-example)

## Server
## Install
```
$ npm install --save wehelpjs
```

## RPC Servers
https://api.WeYouMe.io By Default<br/>
https://peer0.WeYouMe.io:8090<br/>
https://peer0.WeYouMe.io:8091<br/>
https://peer0.WeYouMe.io:8092<br/>

## Examples
### Broadcast Vote
```js
var wehelpjs = require('wehelpjs');

var wif = wehelpjs.auth.toWif(username, password, 'posting');
wehelpjs.broadcast.vote(wif, voter, author, permlink, weight, function(err, result) {
	console.log(err, result);
});
```

### Get Accounts
```js
wehelpjs.api.getAccounts(['ned', 'dan'], function(err, result) {
	console.log(err, result);
});
```

### Get State
```js
wehelpjs.api.getState('/trends/funny', function(err, result) {
	console.log(err, result);
});
```

### Reputation Formatter
```js
var reputation = wehelpjs.formatter.reputation(user.reputation);
console.log(reputation);
```

## Contributions
Patches are welcome! Contributors are listed in the package.json file. Please run the tests before opening a pull request and make sure that you are passing all of them. If you would like to contribute, but don't know what to work on, check the issues list or on the [WeYouMe Github](https://github.com/WeYouMe/wehelpjs)

## Issues
When you find issues, please report them!

## License
MIT
