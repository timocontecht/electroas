var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	posetdBy: {
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'User'
	},
	inpdf: {
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'pdf'
	},
	page: Number,
	startLine: Number,
	endLine: Number, 
	comment: String, 
	type: {
		type: String, 
		enum: ['Comment', 'Question']
	}
});

mongoose.model('Comment', CommentSchema);
