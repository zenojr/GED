module.exports = function(app){
	app.get('/produtos',function(req,res){
		var mysql = require('mysql');
		
		var connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'pass@word1',
			database: 'GED'
		});

		connection.query('select * from livros',function(err,results){
			res.render('produtos/lista',{lista:results});
		});

		connection.end();

	});	
	
};


