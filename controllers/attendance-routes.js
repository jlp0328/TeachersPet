var express = require("express");

var router = express.Router();

var db = require("../models");


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

       db.Attendance.bulkCreate(

        req.body.classPresence

       ).then(function(dbAttendance) {

        console.log(dbAttendance);
        res.redirect("/attendance");
      });
    });

     app.get("/attendance-logs/:id/:first_name/:last_name", function(req, res) {
      db.Student.findAndCountAll({

        include: [
          {
            model:db.Attendance,
            where: {presence: "Absent",
          }
           }
        ],

        where: {systemNumber: req.params.id,
                first_name: req.params.first_name,
                last_name: req.params.last_name
              }

      }).then(function(dbAttendance){
        //will need to change handlebars or add new handlebars
        // res.json(dbAttendance.count);
           console.log(dbAttendance);
        res.render("attendanceRecords", {
           presentDays: dbAttendance.count,
           first_name: req.params.first_name,
           last_name: req.params.last_name
          });
      });
     });

}
