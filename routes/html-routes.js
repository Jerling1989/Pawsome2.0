

//for testing data insertion of all fields including 
//images

var path = require("path");


module.exports = function(app){
	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "../views/test.html"));
	})
};