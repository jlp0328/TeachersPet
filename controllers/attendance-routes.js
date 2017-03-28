var express = require("express");

var router = express.Router();

var db = require("../models");

// var classPresence = [];

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

    app.get("/attendance-log", function(req, res) {
        db.Attendance.findAndCountAll({
          include:[{model:db.Student}],
          where:{
            "presence":{}
          }
        }).then(function(dbAttendance) {

        res.render("attendance", {

          students: dbAttendance.count;

          });
        });
      });

    app.post("/attendance", function(req, res) {

       db.Attendance.bulkCreate(

        req.body.classPresence

       ).then(function(dbAttendance) {

        console.log(dbAttendance);
        res.redirect("/attendance");
      });
    });



   //messing with assignments logs
    //  app.get("/assignments-logs", function(req, res) {
    //   db.Students.findAndCountAll({
    //     include: [{model:db.Attendance,
    //     where: { presence: "Present" }
    //     }]
    //   }).then(function(dbAttendance){
    //     //will need to change handlebars or add new handlebars
    //     res.render("assignments", {
    //       dbAttendance.count;
    //     });
    //   });
    // });

}
