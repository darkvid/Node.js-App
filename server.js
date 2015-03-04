var expressServer 	= require ('./app/expressServer'),
	conf 			= require ('./conf')


var app = new expressServer(); 

 
app.server.listen(conf.port);
console.log('Servidor corriendo en http://127.0.0.1:' + conf.port);