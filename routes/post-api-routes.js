 var db = require("../models"); //requiring the database
 var multer = require("multer"); //requiring the multer npm package


 module.exports = function(app) {
     //trying to implement the multer packaage
     var storage = multer.diskStorage({
         destination: function(req, file, cb) {
             cb(null, 'uploads/post')
         },
         filename: function(req, file, cb) {
             cb(null, file.fieldname +'.jpg')
         }
     });

     var upload = multer({storage: storage}).single('postPic');




     //get route that retrieves pet data from the data pa 
     // this below is a dummy route
     app.get("/pets/post", function(req, res) {
         db.Post.findAll({}).then(function(dbUser) {
             res.json(dbUser);
         });
     });

     //post route for inserting new pets into the data base
     app.post("/pets/post", function(req, res) {
         db.Post.create({
             stat_image_path: req.body.stat_image_path, //inserting content into database via sequelize
             status: req.body.status,
             likes: req.body.likes
         }).then(function(dbUser) {
             res.json(dbUser); //respond with the content in json format
         });
     });
     //post route for posted pictures
     app.post("/pets/postPic", function(req, res) {
         upload(req, res, function(err) {
             if (err) {

             }
             res.json({
                 success: true,
                 message: 'Image Uploaded'
             });
         });
     });


     //delete route for deleting pets from a database
     //the table below is a dummy table
     app.delete("/pets/post/:id", function(req, res) {
         db.Post.destroy({
             where: {
                 id: req.params.id
             }
         }).then(function(dbUser) {
             res.json(dbUser);
         });
     });



     //put route incase the user wants to make any changes to the database
     app.put("/pets/post", function(req, res) {
         db.Post.update(req.body, {
             where: {
                 id: req.body.id
             }
         }).then(function(dbUser) {
             res.json(dbUser);
         });
     });

 }