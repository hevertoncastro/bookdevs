var model = require('../models/LinksModel.js');
var debug = require('debug')('vitrine:controller');
var Promise = require('bluebird');
var debug = require('debug')('vitrine:controller');

function LinkController(){
	model = Promise.promisifyAll(model);
}

LinkController.prototype.findAll = function(request, response, next){
	model.findAsync({})
		.then(function(err, result){
			return response.json(err);
		})
		.catch(next);
};

LinkController.prototype.create = function(request, response, next){
	var body = request.body;
	model.createAsync(body)
		.then(function(result){
			return response.json(result);
		})
		.catch(function(err){
			next(err);
		});
};

LinkController.prototype.findOne = function(request, response, next){
	var id = request.params.id;

	model.findOne(id, function(err, result){
		if(err){
			return response.json(err);
		}
		response.json(result);
	});
};

//FINALIZAR
LinkController.prototype.update = function(request, response, next){
	
	var id = request.params.id;

	model.updateAsync(id, {name: "link Updated"})
		.then(function(result){
			response.json(result);
		})
		.catch(next);
};

LinkController.prototype.delete = function(request, response, next){
	
	var id = request.params.id;

	model.removeAsync(id)
		.then(function(result){
			response.json(result);
		})
		.catch(next);
};

module.exports = new LinkController();