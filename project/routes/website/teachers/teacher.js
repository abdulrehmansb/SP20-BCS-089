const express = require("express");
const router = express.Router();
const Teacher = require("../../../model/teacher/teach");

router.get("/teachers/delete/:id", async (req, res) => {
  let teacher = await Teacher.findByIdAndDelete(req.params.id);
  res.redirect("/teachers");
});
router.get("/teachers/edit/:id", async (req, res) => {
  let teacher = await Teacher.findById(req.params.id);
  res.render("teachers/edit", { teacher });
});
router.post("/teachers/edit/:id", async (req, res) => {
  let teacher = await Teacher.findById(req.params.id);
  teacher.name = req.body.name;
  teacher.age = req.body.age;
  teacher.department = req.body.department;
  await teacher.save();
  res.redirect("/teachers");
});

router.get("/teachers/add", (req, res) => {
  res.render("teachers/add");
});
router.post("/teachers/add", async (req, res) => {
  let teacher = new Teacher(req.body);
  await teacher.save();
  res.redirect("/teachers");
});

router.get("/teachers", async (req, res) => {
  const pageTitle = "List of Teachers";
  const teachers = await Teacher.find();
  res.render("teachers/list", { pageTitle, teachers });
});

module.exports = router;
