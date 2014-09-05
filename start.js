var express = require('express');
var path = require('path');
var http = require('http');

var staticApp = express.static(path.join(__dirname, 'public'));

require('./server/app')(function(backendApp) {
	var app = express();

	app.set('port', process.env.PORT || 3000);

	app.use('/api', backendApp);
	app.use('/', staticApp);

	app.listen(app.get('port'), function(){
  		console.log('Express server listening on port ' + app.get('port'));
	});
});