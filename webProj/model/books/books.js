const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: String,
  year: Number,
  author: String,
  tags: [String],
});

const book = mongoose.model("books", bookSchema);
module.exports = book;
