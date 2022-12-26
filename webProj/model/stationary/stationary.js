const mongoose = require("mongoose");

const stationSchema = mongoose.Schema({
  title: String,
  price: Number,
  quantity: Number,
  tags: [String],
});

const stationary = mongoose.model("stationary", stationSchema);
module.exports = stationary;
