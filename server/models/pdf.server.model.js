var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pdfSchema = new Schema({
	url: String,
	title: String,
	authors: String
});

mongoose.model('pdf', pdfSchema);
