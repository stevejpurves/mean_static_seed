var express = require('express');
var bodyParser = require('body-parser');
var api = require('./api');
var mongoose = require('mongoose');

function startDB(callback) {
	var db = mongoose.connection;

	db.on('error', console.error);
	db.once('open', function() {
	  // Create your schemas and models here.
	  	callback(db);
	});

	mongoose.connect('mongodb://localhost/dev');
};

function startServer(db, doListen) {
	var app = express();
	app.set('db', db);

	// do serverside app config in here
	app.use(bodyParser.urlencoded({ extended: false }))
	app.use(bodyParser.json())
	app.use(express.favicon());
	app.use(express.methodOverride());
	app.use(express.cookieParser("CANA12RIA1S*2KA(K£NAIO"));
	app.use(express.session());

	doListen(app);
};

module.exports = function(doListen) {
	startDB( function(db) { 
		startServer(db, doListen); 
	} );
};