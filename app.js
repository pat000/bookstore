var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require ('mongoose');

app.use(express.static(__dirname+'/client/'));


app.use(bodyParser.json());

Genre = require ('./models/genre');
Book = require ('./models/book');

//connect to mongoose
//mongoose.connect('mongodb://pat000:Patrick000@jello.modulusmongo.net:27017/Ohuhy5za');
mongoose.connect('mongodb://pat000:Patrick000@ds229295.mlab.com:29295/bookstore');

//modulus env set MONGO_URL \ "mongodb://pat000:Patrick000@jello.modulusmongo.net:27017/Ohuhy5za?autoReconnect=true&connectTimeoutMS=60000"
var db = mongoose.connection;

app.get('/', function(req,res){
	res.send ('Hello World');
});


app.get('/api/genres',function (req,res){
	
	Genre.getGenres(function(err,genres){
		
		if(err){
			throw err;
		}
		 res.json(genres);
	});
});


app.post('/api/genres',function (req,res){
	var genre = req.body;
	Genre.addGenres(genre,function(err,genre){
		if(err){
			throw err;
		}
		 res.json(genre);
	});
});

app.put('/api/genres/:_id',function (req,res){
	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenres(id,genre,{},function(err,genre){
		if(err){
			throw err;
		}
		 res.json(genre);
	});
});

app.delete('/api/genres/:_id',function (req,res){
	var id = req.params._id;
	Genre.removeGenres(id,function(err,genre){
		if(err){
			throw err;
		}
		 res.json(genre);
	});
});



app.get('/api/book',function (req,res){
	
	Book.getBooks(function(err,book){
		
		if(err){
			throw err;
		}
		 res.json(book);
	});
});


app.get('/api/book/:_id',function (req,res){
	
	Book.getBookById(req.params._id, function(err,book){
		
		if(err){
			throw err;
		}
		 res.json(book);
	});
});

app.post('/api/book',function (req,res){
	var book = req.body;
	Book.addBook(book,function(err,book){
		if(err){
			throw err;
		}
		 res.json(book);
	});
});

app.put('/api/book/:_id',function (req,res){
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id,book,{},function(err,book){
		if(err){
			throw err;
		}
		 res.json(book);
	});
});

app.delete('/api/book/:_id',function (req,res){
	var id = req.params._id;
	Book.removeBook(id,function(err,book){
		if(err){
			throw err;
		}
		 res.json(book);
	});
});


app.listen(process.env.PORT || 27017);
console.log("running on port 27017...");
