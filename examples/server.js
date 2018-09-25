var wehelpjs = require('../lib');

wehelpjs.api.getAccountCount(function(err, result) {
	console.log(err, result);
});

wehelpjs.api.getAccounts(['dan'], function(err, result) {
	console.log(err, result);
	var reputation = wehelpjs.formatter.reputation(result[0].reputation);
	console.log(reputation);
});

wehelpjs.api.getState('trending/WeYouMe', function(err, result) {
	console.log(err, result);
});

wehelpjs.api.getFollowing('ned', 0, 'blog', 10, function(err, result) {
	console.log(err, result);
});

wehelpjs.api.getFollowers('dan', 0, 'blog', 10, function(err, result) {
	console.log(err, result);
});

wehelpjs.api.streamOperations(function(err, result) {
	console.log(err, result);
});

wehelpjs.api.getDiscussionsByActive({
  limit: 10,
  start_author: 'thecastle',
  start_permlink: 'this-week-in-level-design-1-22-2017'
}, function(err, result) {
	console.log(err, result);
});
