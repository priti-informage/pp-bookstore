var mongoose = require('mongoose');

//gener schema
var bookSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	gener:{
		type: String,
		required: true
	},
	description:{
		type: String,
		
	},
	author:{
		type: String,
		required: true
	},
	publisher:{
		type: String,
		
	},
	pages:{
		type: String,
		
	},
	image_url:{
		type: String,
		
	},
	buy_url:{
		type: String,
		
	},
	create_date:{
		type: Date,
		dafault: Date.now
	}
})

var Book = module.exports =mongoose.model('Book',bookSchema);

// get geners
module.exports.getBooks = function(callback,limit){
	Book.find(callback).limit(limit);
}

module.exports.getBookById = function(id,callback){
	Book.findById(id, callback);
}

module.exports.addBooks = function(book,callback){
	Book.create(book, callback);
}


module.exports.updateBook = function(id, book, options,callback){
	var query = {_id:id}
	var update = {
		title: book.title,
		gener: book.gener,
		description: book.description,
		author: book.author,
		publisher: book.publisher,
		pages: book.pages,
		image_url: book.image_url,
		buy_url: book.buy_url
	}
	Book.findOneAndUpdate(query, update, options, callback);
}
// Delete Book
module.exports.removeBook = function(id, callback){
	var query = {_id: id};
	Book.remove(query, callback);
}