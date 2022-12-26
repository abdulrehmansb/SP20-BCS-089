const express = require("express");
const router = express.Router();
const Book = require("../../../model/books/books");

//router to delete single book
router.delete("/api/books/books/:id", async (req, res) => {
  let book = await Book.findById(req.params.id);
  await book.delete();
  res.send(book);
});

//router to update single book
router.put("/api/books/books/:id", async (req, res) => {
  let book = await Book.findById(req.params.id);
  book.title = req.body.title;
  book.year = req.body.year;
  book.author = req.body.author;
  book.tags = req.body.tags;
  await book.save();
  res.send(book);
});

//router to get single book
router.get("/api/books/books/:id", async (req, res) => {
  let book = await Book.findById(req.params.id);
  res.send(book);
});

//router to create new book
router.post("/api/books/books", async (req, res) => {
  let book = new Book(req.body);
  await book.save();
  res.send(book);
});

//router to get all books
router.get("/api/books/books", async (req, res) => {
  let book = await Book.find();
  res.send(book);
});

module.exports = router;
