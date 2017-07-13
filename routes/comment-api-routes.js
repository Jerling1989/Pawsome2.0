//importing the database to be refrenced in our routes when making various requests
var db = require("../models");

//creating a function that will handle our routes
//these will either retrieve information from a data base via a GET request 
//OR they insert and updata information via post/put requests


module.exports = function(app){
	 //comment get route
    app.get("/pets/comment", function(req, res) {
        db.Comment.findAll({}).then(function(dbUser) {
            res.json(dbUser);
        });
    });

   //comment post route
    app.post("/pets/comment", function(req, res) {
        db.Comment.create({
            comment: req.body.comment, //inserting content into database via sequelize
            likes: req.body.likes
        }).then(function(dbUser) {
            res.json(dbUser); //respond with the content in json format
        });
    });

     //comment delete route
    app.delete("/pets/comment/:id", function(req, res) {
        db.Comment.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    //comment delete route
    app.put("/pets/comment", function(req, res) {
        db.Comment.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });



}