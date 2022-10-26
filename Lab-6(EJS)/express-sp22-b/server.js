//first we require express
const express = require("express");
//we require a module to support ejs layouts
var expressLayouts = require("express-ejs-layouts");
// run below command to recreate node_modules
//npm install
//npm i nodemon -g
// above command will install nodemon globally
const app = express();

//setup ejs as view engine
app.set("view engine", "ejs");
app.use(expressLayouts);
//setup public folder as static files
app.use(express.static("public"));

//sample of an api route
app.get("/api/products", function (request, respnse) {
  respnse.send(["Pen", "Pencil"]);
});

//cv
app.get("/cv", function (req, res) {
  res.render("cv", { layout: false });
  //   res.send("<h1>Hello B Section with nodemon</h1>");
});

//homepage
app.get("/", function (req, res) {
  res.render("homepage");
  //   res.send("<h1>Hello B Section with nodemon</h1>");
});

//homepage
app.get("/homepage", function (req, res) {
  res.render("homepage");
  //   res.send("<h1>Hello B Section with nodemon</h1>");
});

app.listen(2000, function () {
  console.log("Listening on 2000");
});
