const express = require("express");
const router = express.Router();
const Student = require("../../../model/student/stud");

//router to delete single car
router.delete("/api/students/student/:id", async (req, res) => {
  let student = await Student.findById(req.params.id);
  await student.delete();
  res.send(student);
});

//router to update single car
router.put("/api/students/student/:id", async (req, res) => {
  let student = await Student.findById(req.params.id);
  student.name = req.body.name;
  student.age = req.body.age;
  student.major = req.body.major;
  student.totalCreditHours = req.body.totalCreditHours;
  await student.save();
  res.send(student);
});

//router to get single car
router.get("/api/students/student/:id", async (req, res) => {
  let student = await Student.findById(req.params.id);
  res.send(student);
});

//router to create new car
router.post("/api/students/student", async (req, res) => {
  let student = new Student(req.body);
  await student.save();
  res.send(student);
});

//router to get all cars
router.get("/api/students/student", async (req, res) => {
  let student = await Student.find();
  res.send(student);
});

module.exports = router;
