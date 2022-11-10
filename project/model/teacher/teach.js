const mongoose = require("mongoose");

const teachSchema = mongoose.Schema({
  name: String,
  age: Number,
  department: String,
});

const teacher = mongoose.model("teach", teachSchema);
module.exports = teacher;
