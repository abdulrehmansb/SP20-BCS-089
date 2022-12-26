const express = require("express");
const mongoose = require("mongoose");
var expressLayouts = require("express-ejs-layouts");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressLayouts);

app.use("/", require("./routes/website/stationary/stationary"));
app.use("/", require("./routes/api/stationary/stationary"));

app.use("/", require("./routes/website/books/books"));
app.use("/", require("./routes/api/books/books"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(2000, () => {
  console.log("server deployed!");
});

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost/webProj")
  .then(() => {
    console.log("mongo connected!");
  })
  .catch((err) => {
    console.log("mongo failed!");
  });
