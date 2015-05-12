var mongojs = require('mongojs');
var db = mongojs('localhost/bookmarks');
db.on('error', function(err){
	console.log(err);
});

module.exports = db;