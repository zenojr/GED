var express = require('express');
var load = require('express-load');

//carregamento deixado fora da função para que o carregamento seja realizado apenas uma vez

module.exports = function(){ //padrão nodejs para exportar modulos dentro do ecossistema

	var app =  express(); //invocação do objeto


	app.set('view engine','ejs');
	app.set('views','./app/views');
	
	load('routes').intro(app);//invocando objeto load


	return app;
}