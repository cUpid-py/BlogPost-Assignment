const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({

  //title of blog
  title: {
    type: String,
    required: true,
  },

  //body of blog
  body: {
    type: String,
    required: true,
  },

  //author of blog
  author: String,
  date: {
    type: Date,
    default: Date.now,
  },

  //comment on blog
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  }],
});


const Blog = mongoose.model("Blog", BlogSchema); 

module.exports = { Blog };
