//var connectionFactory = require('../infra/connectionFactory'); - removido devido ao uso do express load
module.exports = function(app){
	app.get('/produtos',function(req,res){
		var connection = connectionFactory();

		connection.query('select * from livros',function(err,results){
			res.render('produtos/lista',{lista:results});
		});

		connection.end();

	});	
	
};


