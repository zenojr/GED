
var app = require('./config/express')(); 
var rotasProdutos = require('./app/routes/produtos')(app);


//var app = configura(); 
//app.set('view engine','ejs'); 



app.listen(3000,function(){ 
	console.log("V8 running!!");
}); 