var express = require("express");

var router = express.Router();

var db = require("../models");

var classPresence = [];

db.Student.hasMany(db.Attendance, {foreignKey:"student_id"});
db.Attendance.belongsTo(db.Student, {foreignKey:"student_id"})

module.exports = function(app){

    app.get("/attendance", function(req, res) {
        db.Student.findAll({
          include:[{model:db.Attendance}]
        }).then(function(dbStudent) {
        res.render("attendance", {
          students: dbStudent,
          subject: dbStudent[0].subject
          });
        });
      });

    app.get("/attendance-testing", function(req, res) {
      db.Attendance.findAll({
        include:[{model:db.Student}]
      }).then(function(dbAttendance) {
      res.json(dbAttendance)
      });
    });

    app.post("/attendance", function(req, res) {

       db.Attendance.bulkCreate({

       }).then(function(dbAttendance) {
        console.log(dbAttendance);
            res.redirect("/attendance");
      });
    });

   // app.put("/:student_id", function(req, res) {
   //      var condition = "student id = " + req.params.student_id;

   //      console.log("condition", condition);

   //       db.Attendance.update({
   //          date: req.body.date
   //        },
   //        {
   //          where:{
   //            student_id:req.params.student_id}
   //          }).then(function(dbAttendance) {
   //        // res.render("index", dbBurger);
   //            res.redirect("/attendance");
   //        });
   //      });

}
