const express = require("express");
const mongoose = require("mongoose");
var expressLayouts = require("express-ejs-layouts");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressLayouts);

app.use("/", require("./routes/website/teachers/teacher"));
app.use("/", require("./routes/api/teachers/teacher"));

app.use("/", require("./routes/website/students/student"));
app.use("/", require("./routes/api/students/student"));

app.get("/", (req, res) => {
  res.render("homepage");
});

app.listen(2000, () => {
  console.log("server deployed!");
});

mongoose
  .connect("mongodb://localhost/project")
  .then(() => {
    console.log("mongo connected!");
  })
  .catch((err) => {
    console.log("mongo failed!");
  });
