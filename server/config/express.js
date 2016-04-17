var express = require('express');

module.exports = function() {
	var app = express();

	var bodyParser = require('body-parser');


	var jsonParser = bodyParser.json();
	var urlencodedParser = bodyParser.urlencoded({ extended: false});
	app.use(urlencodedParser);
	app.use(jsonParser);


	require('../routes/user.server.routes.js')(app);
	require('../routes/pdf.server.routes.js')(app);
	require('../routes/comment.server.routes.js')(app);

	return app;
};	
