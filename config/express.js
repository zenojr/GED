var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

//carregamento deixado fora da função para que o carregamento seja realizado apenas uma vez

module.exports = function(){ //padrão nodejs para exportar modulos dentro do ecossistema

	var app =  express(); //invocação do objeto
	app.set('view engine','ejs');
	app.set('views','./app/views');

	app.use(bodyParser.urlencoded({extended: true})); //app.use é um metodo do express que recebe instruções de execução durante o request
	
	load('routes', {cwd:'app'}) //cwd é um json q restringe a busca na pasta app pra melhorar o desempenho
		.then('infra')
		.into(app);//invocando objeto load


	return app;
}