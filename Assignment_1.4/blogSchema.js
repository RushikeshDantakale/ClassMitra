const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title : {
    type : String,
    required : true
    },
    author : {
        type : String,
    },
    content : {
        type : String,
        required : true
    },
    date_of_post : {
        type : Date,
    },
   
})

const Blog = mongoose.model("BLOG",blogSchema);



module.exports = Blog;