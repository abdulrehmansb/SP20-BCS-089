const express = require("express");
const router = express.Router();
const Stationary = require("../../../model/stationary/stationary");

router.get("/stationary/delete/:id", async (req, res) => {
  let stationary = await Stationary.findByIdAndDelete(req.params.id);
  res.redirect("/stationary");
});
router.get("/stationary/edit/:id", async (req, res) => {
  let stationary = await Stationary.findById(req.params.id);
  res.render("stationary/edit", { stationary });
});
router.post("/stationary/edit/:id", async (req, res) => {
  let stationary = await Stationary.findById(req.params.id);
  stationary.title = req.body.title;
  stationary.price = req.body.price;
  stationary.quantity = req.body.quantity;
  stationary.tags = req.body.tags;
  await stationary.save();
  res.redirect("/stationary");
});

router.get("/stationary/add", (req, res) => {
  res.render("stationary/add");
});
router.post("/stationary/add", async (req, res) => {
  let stationary = new Stationary(req.body);
  await stationary.save();
  res.redirect("/stationary");
});

router.get("/stationary", async (req, res) => {
  const pageTitle = "List of Stationary";
  const stationary = await Stationary.find();
  res.render("stationary/list", { pageTitle, stationary });
});

module.exports = router;
