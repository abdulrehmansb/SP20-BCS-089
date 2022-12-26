const express = require("express");
const router = express.Router();
const Stationary = require("../../../model/stationary/stationary");

//router to delete single stationary
router.delete("/api/stationary/stationary/:id", async (req, res) => {
  let stationary = await Stationary.findById(req.params.id);
  await stationary.delete();
  res.send(stationary);
});

//router to update single stationary
router.put("/api/stationary/stationary/:id", async (req, res) => {
  let stationary = await Stationary.findById(req.params.id);
  stationary.title = req.body.title;
  stationary.price = req.body.price;
  stationary.quantity = req.body.quantity;
  stationary.tags = req.body.tags;
  await stationary.save();
  res.send(stationary);
});

//router to get single stationary
router.get("/api/stationary/stationary/:id", async (req, res) => {
  let stationary = await Stationary.findById(req.params.id);
  res.send(stationary);
});

//router to create new stationary
router.post("/api/stationary/stationary", async (req, res) => {
  let stationary = new Stationary(req.body);
  await stationary.save();
  res.send(stationary);
});

//router to get all stationary
router.get("/api/stationary/stationary", async (req, res) => {
  let stationary = await Stationary.find();
  res.send(stationary);
});

module.exports = router;
