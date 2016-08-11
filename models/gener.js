var mongoose = require('mongoose');

//gener schema
var generSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	created_date:{
		type: Date,
		dafault: Date.now
	}
})

var Gener = module.exports =mongoose.model('Gener',generSchema);

// get geners
module.exports.getGeners = function(callback,limit){
	Gener.find(callback).limit(limit);
}

//add gener
module.exports.addGeners = function(gener,callback){
	Gener.create(gener, callback);
}

//update gener
module.exports.updateGener = function(id, gener, options,callback){
	var query = {_id:id}
	var update = {
		name: gener.name
	}
	Gener.findOneAndUpdate(query, update, options, callback);
}

//delete gener
module.exports.removeGener = function(id,callback){
	var query = {_id:id}
	Gener.removeGener(query, callback);
}