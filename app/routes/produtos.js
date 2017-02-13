module.exports = function(app){
	app.get('/produtos',function(req,res){
	res.render("produtos/lista");
	res.render("produtos/img");
	res.render("produtos/CSS");
	});	
	
};

