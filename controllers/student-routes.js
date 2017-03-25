var express = require("express");

var router = express.Router();

var db = require("../models");

db.Student.hasMany(db.Attendance, {foreignKey:"student_id"});
db.Attendance.belongsTo(db.Student, {foreignKey:"student_id"})

module.exports = function(app) {
    app.get("/students", function(req, res) {
        db.Student.findAll({
          include:[{model:db.Attendance}]
        }).then(function(dbStudent) {
        res.render("students", {
          student: dbStudent});
        });
      });

  app.get("/testing", function(req, res) {
    db.Student.findAll({
      include:[{model:db.Attendance}]
    }).then(function(dbStudent) {
    res.json(dbStudent)
    });
  });

}
