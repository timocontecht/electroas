

var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');

var db = mongoose(); 
var app = express();
var passport = passport();


app.use('*', function(req, res) {
	res.send('The electroAs server API');
});

// set the static files location /public/img will be /img for users
//app.use(express.static(__dirname + '/public')); 

app.listen(3000);
console.log('Server running at localhost:3000');

module.exports = app; 
