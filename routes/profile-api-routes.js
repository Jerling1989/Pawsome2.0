 var db = require("../models");
 var multer = require("multer"); //requiring the multer npm package


 module.exports = function(app) {

     var profilePic;
     // trying to implement the multer packaage
     var storage = multer.diskStorage({
         destination: function(req, file, cb) {
             cb(null, 'uploads/profile')
         },
         filename: function(req, file, cb) {
             cb(null, file.fieldname + '.jpg')
         }
     });

     var upload = multer({
         storage: storage
     }).single('profilePic');
     //get route that retrieves pet data from the data pa 
     // this below is a dummy route
     app.get("/pets/profile", function(req, res) {
         db.Profile.findAll({}).then(function(dbUser) {
             res.json(dbUser);
         });
     });

     //post route for inserting new pets into the data base
     app.post("/pets/profile", function(req, res) {
         db.Profile.create({
             name: req.body.name, //inserting content into database via sequelize
             bio: req.body.bio,
             // profile_image_path: "../uploads/profile"
             // profile_album_path: req.body.profile_album_path
         }).then(function(dbUser) {
             res.json(dbUser); //respond with the content in json format
         });
     });

     app.post("/pets/profilePic",function(req, res){
           // console.log(req.body);

           upload(req, res, function(err) {
             if (err) {
                return res.end("Error uploading file.")
             }
             res.end("File is uploaded");
             console.log(res);
             
        
             db.Profile.create({
                profile_image_path: res.req.file.path
             })
         });
     })

     //post route for profile pictures


     //delete route for deleting pets from a database
     //the table below is a dummy table
     app.delete("/pets/profile/:id", function(req, res) {
         db.Profile.destroy({
             where: {
                 id: req.params.id
             }
         }).then(function(dbUser) {
             res.json(dbUser);
         });
     });



     //put route incase the user wants to make any changes to the database
     app.put("/pets/profile", function(req, res) {
         db.Profile.update(req.body, {
             where: {
                 id: req.body.id
             }
         }).then(function(dbUser) {
             res.json(dbUser);
         });
     });

 }