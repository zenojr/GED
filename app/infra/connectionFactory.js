var mysql = require('mysql');

var connectMYSQL = function(){
	return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'pass@word1',
			database: 'GED'
		});
}

module.exports = function(){
	return connectMYSQL;		

}