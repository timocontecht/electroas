

var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');

var db = mongoose(); 
var app = express();
var passport = passport();


app.use('/', function(req, res) {
	res.send('The electroAs server API');
});


app.listen(3000);
console.log('Server running at localhost:3000');

module.exports = app; 
