var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

Gener = require('./models/gener')
Book = require('./models/book')

// connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

//routes
app.get('/',function(req, res){
	res.send('Hello World');
});

app.get('/api/geners',function(req, res){
	Gener.getGeners(function(err, geners){
		if (err) {
			throw err;
		}
		res.json(geners);
	})
});

app.post('/api/geners',function(req, res){
	var gener = req.body
	Gener.addGeners(gener, function(err, gener){
		if (err) {
			throw err;
		}
		res.json(gener);
	})
});


app.put('/api/geners/:_id',function(req, res){
	var id = req.params._id;
	var gener = req.body
	Gener.updateGener(id,gener,{}, function(err, gener){
		if (err) {
			throw err;
		}
		res.json(gener);
	})
});

app.delete('/api/geners/:_id',function(req, res){
	var id = req.params._id;
	Gener.removeGener(id, function(err, gener){
		if (err) {
			throw err;
		}
		res.json(gener);
	})
});

app.get('/api/books',function(req, res){
	Book.getBooks(function(err, books){
		if (err) {
			throw err;
		}
		res.json(books);
	})
});

app.post('/api/books',function(req, res){
	var book = req.body
	Book.addBooks(book, function(err, book){
		if (err) {
			throw err;
		}
		res.json(book);
	})
});

app.get('/api/books/:_id',function(req, res){
	Book.getBookById(req.params._id,function(err, book){
		if (err) {
			throw err;
		}
		res.json(book);
	})
});

app.put('/api/books/:_id', function(req, res){
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, {}, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.delete('/api/books/:_id', function(req, res){
	var id = req.params._id;
	Book.removeBook(id, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.listen(8080);
console.log('server running at localhost:8080...');