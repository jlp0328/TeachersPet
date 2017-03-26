var express = require("express");

var router = express.Router();

var db = require("../models");

db.Student.hasMany(db.Attendance, {foreignKey:"student_id"});
db.Attendance.belongsTo(db.Student, {foreignKey:"student_id"});

module.exports = function(app) {
    app.get("/students", function(req, res) {
        db.Student.findAll({
          // include:[{model:db.Attendance}]
        }).then(function(dbStudent) {
        res.render("students", {
          students: dbStudent});
        });
      });

  app.get("/testing", function(req, res) {
    db.Student.findAll({
      // include:[{model:db.Attendance}]
    }).then(function(dbStudent) {
    res.json(dbStudent);
    });
  });

  app.post("/students", function(req, res) {
    db.Student.create({
      systemNumber: req.body.systemNumber,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      subject: req.body.subject,
      birthday: req.body.birthday,
      allergies: req.body.allergies,
      iep_modifications: req.body.iep_modifications
    }).then(function(dbStudent) {
      res.redirect("/students");
    });
  });



};
