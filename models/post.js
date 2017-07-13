//setting up a table in the database
//this is just a test



module.exports = function(sequelize, Datatypes) {
    //this is a dummy table for testing the routes later on
    var Post = sequelize.define("Post", { //table containing all of the posts of the users
        stat_image_path: Datatypes.STRING, //path to an image posted as a status

        status: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        likes: Datatypes.INTEGER //number of likes the post recieves
    });
    return Post;

    //creating an association with the users and there comments
    //the each user in the database will have a one to many relationship with the comments 
    // in the comments table
    Post.associate = function(models) {
        Post.hasMany(models.Comment, { //one post has many comments
            onDelete: "cascade"
        });

        Post.belongsTo(models.Post) //a post is related to only one profile
    }
}