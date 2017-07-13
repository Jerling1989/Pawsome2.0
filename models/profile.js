//setting up a table in the database
//this is just a test

module.exports = function(sequelize, Datatypes) {
    //this is a dummy table for testing the routes later on
    var Profile = sequelize.define("Profile", {
        name: {
            type: Datatypes.STRING, //name of the pet
            // allowNull: false,
            validate: {
                len: [1]
            }
        },
        bio: {
            type: Datatypes.TEXT, //fun bio of the pet 
            // allowNull: false,
            validate: {
            	len: [1]
            }
        },
        profile_image_path: Datatypes.STRING, //will contain a path to the file where the image is contained
        // profile_album_path: Datatypes.STRING //contain a path to the file with the album of the pet's pictures
    });
    return Profile;

    //creating an association with the users and there comments
    //the each user in the database will have a one to many relationship with the comments 
    // in the comments table
    Profile.associate = function(models) {
        Profile.hasMany(models.Post, { //one profile has many posts
            onDelete: "cascade"
        });

    }
}