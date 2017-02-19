module.exports = function(){
	this.lista = function(){
		connection.query('select * from produtos', callback);
	}

	return this;
}