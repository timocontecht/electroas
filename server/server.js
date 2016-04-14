var express = require('express');
var app = express();


var bodyParser = require('body-parser');


var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false});
app.use(urlencodedParser);
app.use(jsonParser);

var mongoose = require('./mongoose');
var db = mongoose(); 
require('./routes/user.server.routes.js')(app);
require('./routes/pdf.server.routes.js')(app);



app.use('/', function(req, res) {
	res.send('Hello World');
});


app.listen(3000);
console.log('Server running at localhost:3000');

module.exports = app; 
