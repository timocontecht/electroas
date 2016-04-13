var express = require('express');
var mongoose = require('./mongoose');

var db = mongoose(); 
var app = express();

app.use('/', function(req, res) {
	res.send('Hello World');
});

app.listen(3000);
console.log('Server running at localhost:3000');

module.exports = app; 
