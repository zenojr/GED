var app = require('express');
var load = require('express-load');

var app =  express();
var app_load = load();

app.set('view engine','ejs');
app.set('views','./app/views');
console.log('Express Module Running!');
//carregamento deixado fora da função para que o carregamento seja realizado apenas uma vez

module.exports = function(){ //padrão nodejs para exportar modulos dentro do ecossistema
	return app;
}