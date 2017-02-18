
var app = require('./config/express')(); 
//var rotasProdutos = require('./app/routes/produtos')(app); removido pelo uso do express load

app.listen(3000,function(){ 
	console.log("V8 running!!");
}); 