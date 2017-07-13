//setting up a table in the database
//this is just a test

module.exports = function(sequelize, Datatypes) {
    //this is a dummy table for testing the routes later on
    var Comment = sequelize.define("Comment", {//table for comments that other users make on a post
        comment: {
            type: Datatypes.TEXT, //comment text
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        likes: Datatypes.INTEGER //like number
    });
    return Comment;

    
    //creating a one to one relationship with the user table
    Comment.associate = function(models) {

        Comment.belongsTo(models.Post); //a comment is related to only one post
    }

}