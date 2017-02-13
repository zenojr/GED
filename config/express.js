var app = require('express')();
app.set('view engine','ejs');
app.set('views','./app/views');
console.log('Express Module Running!');
//carregamento deixado fora da função para que o carregamento seja realizado apenas uma vez

module.exports = function(){ //padrão nodejs para exportar modulos dentro do ecossistema
	return app;
}