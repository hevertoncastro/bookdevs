var request = require('supertest');
var app = require('../app');
var assert = require('assert');
var mongo = require('../db/mongo');
var debug = require('debug')('vitrine:test');
/*
describe('Products Endpoint', function(){

	beforeEach(function(done){
		mongo.collection('products').remove({}, function(err, result){

			done();
		});
	});

	it('GET /products | returns all products', function(done){
		var products = [
							{ name: 'FooBar', price: 19.90 },
							{ name: 'Foo', price: 39.90 },
							{ name: 'BarFoo', price: 19.90 }
						];

		mongo.collection('products').insert(products, function(){
			request(app)
			.get('/products')
			.end(function(err, data){

				assert.ok(data.body.length >= 3);

				done();
			});
		});
	});

	it('GET /products/:id | return a product', function(done){
		var product = { name: 'Product One', price: 19.90 };

		mongo.collection('products').insert(product, function(err, result){
			var _id = result._id;
			var name = result.name;

			request(app)
			.get('/products/' + _id)
			.end(function(err, data){
				var result = data.body;

				assert.equal(result._id, _id);
				assert.equal(result.name, name);

				done();
			});
		});
	});

	it('POST /products | create a new product', function(done){

		var product = { name: 'New Product', price: 9.90 };

		request(app)
			.post('/products')
			.send(product)
			.end(function(err, data){
				debug(data);
				var result = data.body;

				assert.equal(result.name, 'New Product');
				done();
			});
	});

	it('PUT /products | update a new products', function(done){
		var product = { _id: 007, name: 'New Product', price: 19.90 };

		mongo.collection('products').insert(product, function(err, data) {
			var _id = data._id;

			debug(data);

			request(app)
			.put('/products/'+_id)
			.send({name: "Product Updated"})
			.end(function(err, data){
				var result = data.body;

				assert.deepEqual(result, { ok: 1, nModified: 1, n: 1 });

				done();
			});
		});	
	});

	it('DELETE /product/:id | remove a product', function(done){
		var product = { name: 'Product Will Deleted', price: 39.90 };

		mongo.collection('products').insert(product, function(err, data) {

			var _id = data._id;

			request(app)
			.delete('/products/' + _id)
			.end(function(err, data){

				var result = data.body;

				assert.deepEqual(result, { ok: 1, n: 1 });

				done();
			});
		});	
	});
});
*/