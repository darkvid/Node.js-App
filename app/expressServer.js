var express = require('express');

var ExpressServer = function(config){

	config = config || {};

	this.server = express();

	this.server.get('/', function (req, res) {
 		res.send('Hello World From Node Inspector');
	});
};

module.exports = ExpressServer;