var request = require('supertest');
var app = require('../app');
var assert = require('assert');
var mongo = require('../db/mongo');
var debug = require('debug')('link:test');

describe('Link Endpoint', function(){

	beforeEach(function(done){
		mongo.collection('links').remove({}, function(err, result){

			done();
		});
	});

	it('GET /links | returns all links', function(done){
		var links = [
							{ name: 'FooBar', price: 19.90 },
							{ name: 'Foo', price: 39.90 },
							{ name: 'BarFoo', price: 19.90 }
						];

		mongo.collection('links').insert(links, function(){
			request(app)
			.get('/links')
			.end(function(err, data){

				assert.ok(data.body.length >= 3);

				done();
			});
		});
	});

	it('GET /links/:id | return a link', function(done){
		var link = { name: 'Link One', price: 19.90 };

		mongo.collection('links').insert(link, function(err, result){
			var _id = result._id;
			var name = result.name;

			request(app)
			.get('/links/' + _id)
			.end(function(err, data){
				var result = data.body;

				assert.equal(result._id, _id);
				assert.equal(result.name, name);

				done();
			});
		});
	});

	it('POST /links | create a new link', function(done){

		var link = { name: 'New Link', price: 9.90 };

		request(app)
			.post('/links')
			.send(link)
			.end(function(err, data){

				var result = data.body;

				assert.equal(result.name, 'New Link');
				done();
			});
	});

	it('PUT /links | update a new links', function(done){
		var link = { _id: 007, name: 'New Link', price: 19.90 };

		mongo.collection('links').insert(link, function(err, data) {
			var _id = data._id;

			debug(data);

			request(app)
			.put('/links/'+_id)
			.send({name: "Link Updated"})
			.end(function(err, data){
				var result = data.body;

				assert.deepEqual(result, { ok: 1, nModified: 1, n: 1 });

				done();
			});
		});
	});

	it.only('DELETE /link/:id | remove a link', function(done){
		var link = { name: 'Link Will Deleted', price: 39.90 };

		mongo.collection('links').insert(link, function(err, data) {

			var _id = data._id;

			request(app)
			.delete('/links/' + _id)
			.end(function(err, data){

				var result = data.body;

				assert.deepEqual(result, { ok: 1, n: 1 });

				done();
			});
		});
	});
});