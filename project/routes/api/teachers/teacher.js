const express = require("express");
const router = express.Router();
const Teacher = require("../../../model/teacher/teach");

//router to delete single car
router.delete("/api/teachers/teacher/:id", async (req, res) => {
  let teacher = await Teacher.findById(req.params.id);
  await teacher.delete();
  res.send(teacher);
});

//router to update single car
router.put("/api/teachers/teacher/:id", async (req, res) => {
  let teacher = await Teacher.findById(req.params.id);
  teacher.name = req.body.name;
  teacher.age = req.body.age;
  teacher.department = req.body.department;
  await teacher.save();
  res.send(teacher);
});

//router to get single car
router.get("/api/teachers/teacher/:id", async (req, res) => {
  let teacher = await Teacher.findById(req.params.id);
  res.send(teacher);
});

//router to create new car
router.post("/api/teachers/teacher", async (req, res) => {
  let teacher = new Teacher(req.body);
  await teacher.save();
  res.send(teacher);
});

//router to get all cars
router.get("/api/teachers/teacher", async (req, res) => {
  let teacher = await Teacher.find();
  res.send(teacher);
});

module.exports = router;
