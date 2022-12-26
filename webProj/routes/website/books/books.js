const express = require("express");
const router = express.Router();
const Book = require("../../../model/books/books");

router.get("/books/delete/:id", async (req, res) => {
  let book = await Book.findByIdAndDelete(req.params.id);
  res.redirect("/books");
});
router.get("/books/edit/:id", async (req, res) => {
  let book = await Book.findById(req.params.id);
  res.render("books/edit", { book });
});
router.post("/books/edit/:id", async (req, res) => {
  let book = await Book.findById(req.params.id);
  book.title = req.body.title;
  book.year = req.body.year;
  book.author = req.body.author;
  book.tags = req.body.tags;
  await book.save();
  res.redirect("/books");
});

router.get("/books/add", (req, res) => {
  res.render("books/add");
});
router.post("/books/add", async (req, res) => {
  let book = new Book(req.body);
  await book.save();
  res.redirect("/books");
});

router.get("/books", async (req, res) => {
  const pageTitle = "List of Books";
  const book = await Book.find();
  res.render("books/list", { pageTitle, book });
});

module.exports = router;
