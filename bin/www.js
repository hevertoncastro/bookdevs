var cluster = require('cluster');
var numCpus = require('os').cpus().length;
var app = require('../app');
var debug = require('debug')('curso:www');

if(cluster.isMaster){
	for (var i = 0; i < numCpus; i++){
		cluster.fork();
		debug('fork');
	}

	cluster.on('exit', function(worker, code, signal){
		cluster.fork();
		console.log('worker '+ worker.process.pid + ' died');
	});
} else {

	var server = app.listen(3000, function(){
	  var host = server.address().address;
	  var port = server.address().port;

	  //console.log('Example app listening at http://%s:%s', host, port);

	});
}
	

