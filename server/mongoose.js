var mongoose = require('mongoose');

module.exports = function() {
	var db = mongoose.connect('mongodb://localhost/electroas');
	require('./models/user.server.model');
	require('./models/pdf.server.model');
	return db;
};
