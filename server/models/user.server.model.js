var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	firstName: String,
	lastName: String,
	email: { 
		type: String,
		match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
	},
	studentNumber: {
		type: String, 
		unique: true,
		required: 'Student number is required',
		trim: true
	}, 
	password: {
		type: String,
		validate: [
			function(password) {
				return password && password.length > 6; 
			}, 'Password should be longer'	
		]
	},
	salt: {
		type: String
	}, 
	provider: {
		type: String,
		required: 'Provider is required'
	}, 
	providerId: String, 
	providerData: {},
	created: {
		type: Date,
		default: Date.now
	}	
});

UserSchema.pre('save',  function(next) {
	if (this.password)  {
		this.salt = new Buffer(crypto.randmoBytes(16).toString('base64'), 'base64');
		this.password = this.hashPassword(this.password);
	}
	next();
});

UserSchema.methods.hasPassword = function(password)  {
	return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

UserSchema.methods.authenticate = function(password)  {
	return this.password === this.hashPassword(password);
};

mongoose.model('User', UserSchema);
