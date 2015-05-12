var model = require('../models/ProductsModel');
var debug = require('debug')('vitrine:controller');
var Promise = require('bluebird');
var debug = require('debug')('vitrine:controller');

function ProductsController(){
	model = Promise.promisifyAll(model);
}

ProductsController.prototype.findAll = function(request, response, next){
	model.findAsync({})
		.then(function(err, result){
			return response.json(err);
		})
		.catch(next);
};

ProductsController.prototype.create = function(request, response, next){
	var body = request.body;
	model.createAsync(body)
		.then(function(result){
			return response.json(err);
		})
		.catch(function(err){
			next(err);
		});
};

ProductsController.prototype.findOne = function(request, response, next){
	var id = request.params.id;

	model.findOne(id, function(err, result){
		if(err){
			return response.json(err);
		}
		response.json(result);
	});
};

//FINALIZAR
ProductsController.prototype.update = function(request, response, next){
	
	var id = request.params.id;

	model.updateAsync(id, {name: "Product Updated"})
		.then(function(result){
			response.json(result);
		})
		.catch(next);
};

ProductsController.prototype.delete = function(request, response, next){
	
	var id = request.params.id;

	model.removeAsync(id)
		.then(function(result){
			response.json(result);
		})
		.catch(next);
};

module.exports = new ProductsController();