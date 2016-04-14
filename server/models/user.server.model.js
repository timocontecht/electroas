var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	password: String
});

mongoose.model('User', UserSchema);
