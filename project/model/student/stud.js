const mongoose = require("mongoose");

const studSchema = mongoose.Schema({
  name: String,
  age: Number,
  major: String,
  totalCreditHours: Number,
});

const student = mongoose.model("stud", studSchema);
module.exports = student;
