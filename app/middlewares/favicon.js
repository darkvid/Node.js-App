var favicon = require('seve-favicon'),
	path 	= require('path');

module.exports = favicon(path.join(__dirname, '../static.favicon.ico'));