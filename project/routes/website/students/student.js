const express = require("express");
const router = express.Router();
const Student = require("../../../model/student/stud");

router.get("/students/delete/:id", async (req, res) => {
  let student = await Student.findByIdAndDelete(req.params.id);
  res.redirect("/students");
});
router.get("/students/edit/:id", async (req, res) => {
  let student = await Student.findById(req.params.id);
  res.render("students/edit", { student });
});
router.post("/students/edit/:id", async (req, res) => {
  let student = await Student.findById(req.params.id);
  student.name = req.body.name;
  student.age = req.body.age;
  student.major = req.body.major;
  student.totalCreditHours = req.body.totalCreditHours;
  await student.save();
  res.redirect("/students");
});

router.get("/students/add", (req, res) => {
  res.render("students/add");
});
router.post("/students/add", async (req, res) => {
  let student = new Student(req.body);
  await student.save();
  res.redirect("/students");
});

router.get("/students", async (req, res) => {
  const pageTitle = "List of Students";
  const students = await Student.find();
  res.render("students/list", { pageTitle, students });
});

module.exports = router;
