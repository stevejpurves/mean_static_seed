var express = require('express');
var bodyParser = require('body-parser');
var api = require('./api');

module.exports = function(callback) {
	var app = express();

	// do serverside app config in here
	app.use(bodyParser());
	app.use(express.favicon());
	app.use(express.methodOverride());
	app.use(express.cookieParser("CANA12RIA1S*2KA(K£NAIO"));
	app.use(express.session());

	callback(app);
};