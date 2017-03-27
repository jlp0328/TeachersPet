var express = require("express");
var db = require("../models");

classGrades = [];

db.Student.hasMany(db.Assignments, {foreignKey:"student_id"});
db.Assignments.belongsTo(db.Student, {foreignKey:"student_id"});

module.exports = function(app) {

	app.get("/assignments", function(req, res) {
		db.Student.findAll({
			include: [{model:db.Assignments}]
		}).then(function(dbStudent){
			res.render("assignments", {
				students: dbStudent,
				subject: dbStudent[0].subject
			});
		});
	});

	  app.get("/assignments-testing", function(req, res) {
      db.Assignments.findAll({
        include:[{model:db.Student}]
      }).then(function(dbAssignments) {
      res.json(dbAssignments);
      });
    });

	  app.post("/assignments", function(req, res) {
	  	db.Assignments.bulkCreate(classGrades).then(function(dbAssignments){
	  		res.redirect("/assignments");
	  	});
	  });

};