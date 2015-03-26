var express = require('express'),
	path = require('path');


var options = {
	extensions: ['png']
};

module.exports = express.static(__dirname, '../../../static', options);