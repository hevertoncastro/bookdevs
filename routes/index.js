module.exports = function(app){
	var express = require('express');
	var router = express.Router();

	router.get('/', function (request, response, next) {
		response.render('index', {

			products: [
				{name: 'Todinho', price: 2.70},
				{name: 'Fanta', price: 2.70},
				{name: 'Suco', price: 2.70},
				{name: 'Cerveja', price: 2.70},
				{name: 'Vinho', price: 2.70}

			]
		});
	});

	app.use('/links', require('./links'));

	app.use('/products', require('./products'));

	return router;
};