var express = require('express');
var server = express();
 
server.get('/', function (req, res) {
	debugger;
 	res.send('Hello World From Node Inspector');
});
 
server.listen(3000);
console.log('Servidor corriendo en http://127.0.0.1:3000');