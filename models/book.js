var mongoose = require ('mongoose');
//Book schemas
var bookSchema = mongoose.Schema({	
	title:{
		type: String,
		required :true
	},
	genre:{
		type: String,
		required :true
	},
	description:{
		type: String
	},
	author:{
		type: String
	},
	publisher:{
		type: String
	},
	pages:{
		type: String
	},
	image_url:{
		type: String
	},
	by_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
	
});

var Book = module.exports = mongoose.model('Book',bookSchema);
// get Book
module.exports.getBooks = function(callback,limit){
	Book.find(callback).limit(limit);
}

module.exports.getBookById = function(id,callback){
	Book.findById(id,callback);
}

// add book

module.exports.addBook = function(book,callback){
	Book.create(book,callback);
}


// update book
module.exports.updateBook = function(id,book,options,callback){
	var query ={_id:id};
	var update = {
			title:book.title,
			genre:book.title,
			description:book.description,
			author:book.author,
			publisher:book.publisher,
				pages:book.pages,
			image_url:book.image_url,
			by_url:book.by_url
		
	}
	Book.findOneAndUpdate(query,update,options,callback);
}


// delete genre
module.exports.removeBook = function(id,callback){
	var query ={_id:id};
	Book.remove(query,callback);
}
