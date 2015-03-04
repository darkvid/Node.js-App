expressServer = require ('./app/expressServer');

var app = new expressServer(); 

 
app.server.listen(3000);
console.log('Servidor corriendo en http://127.0.0.1:3000');