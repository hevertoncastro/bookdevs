var db = require('../db/mongo');
var debug = require('debug')('vitrine:controller');

function LinksModel(){

}

LinksModel.prototype.find = function(query, callback){
	db.collection('products').find(query, callback);
};

LinksModel.prototype.insert = function(data, callback){
	db.collection('products').insert(data, callback);
};

LinksModel.prototype.findOne = function(id, callback){
	var _id = db.ObjectId(id);

	db.collection('products').findOne({_id: _id}, callback);

};

LinksModel.prototype.update = function(data, callback){
	db.collection('products').update(data, callback);
};

LinksModel.prototype.remove = function(id, callback){
	db.collection('products').remove(id, callback);
};

module.exports = new LinksModel();