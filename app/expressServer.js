var express = require('express'),
	middlewares = require('./middlewares/admin');

var ExpressServer = function(config){

	config = config || {};

	this.server = express();

	//middlewares, los recorremos y decimos a express que los use
	for (middleware in middlewares){
		this.server.use(middlewares[middleware]);
	}

	this.server.get('/', function (req, res) {
 		res.send('Hello World From Node');
	});
};

module.exports = ExpressServer;