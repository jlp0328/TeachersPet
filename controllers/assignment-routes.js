var express = require("express");
var db = require("../models");
var counter = 0;
var scores = [];
var avg = 0;
var sum = 0;

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
	  	db.Assignments.bulkCreate(

	  		  req.body.classGrades
	  		  
	  		).then(function(dbAssignments){
	  		res.redirect("/assignments");
	  	});
	  });


	app.get("/assignments-grades/:id/:first_name/:last_name", function(req, res) {
	  	db.Student.findAll({

	  		where: {systemNumber: req.params.id,
                first_name: req.params.first_name,
                last_name: req.params.last_name
              },
	  		include: [
	  		  {
	  		  	model:db.Assignments,
	  		  	order: [[db.sequelize.fn("AVG", db.sequelize.col("grade")), "grade_AVG"]]
	  		}]
	  	}).then(function(dbGrades){
	  		// res.json(dbGrades);
	  	  // if (counter < dbGrades.length) {	
	  	  for (var i = 0; i < dbGrades.length; i++) {
	  		for (var j = 0; j < dbGrades[i].Assignments.length; j++) {
	  			if (dbGrades[i].Assignments[j] ===0) {
	  				res.render("grade", {
	  					grade: "No Grade",
	  				})
	  			}//end of if
	  			else {
	  				scores.push(dbGrades[i].Assignments[j].grade);
	  				console.log(scores);
	  			}//end of else
	  		}//end of j loop
	  	  }//end of i loop
	  	 
	  	  sum = scores.reduce(function(a, b) {
	  	  		return a + b;
	  	  })/scores.length;
	  	  
	  	  console.log(scores);
	  	  
	  	  res.render("grade", {
	  	  	first_name: req.params.first_name,
	  	  	// grade: scores.reduce(function(a, b) {
	  	  	// 	return a + b;
	  	  	// 	})/scores.length,
	  	  	grade: sum,
           	last_name: req.params.last_name
	  	  });//end of render
	  	});//end of then
	  clear();
	  });

	app.get("/assignments-grades/:id/:first_name/:last_name/testing", function(req, res) {
	  	db.Student.findAll({

	  		where: {systemNumber: req.params.id,
                first_name: req.params.first_name,
                last_name: req.params.last_name
              },
	  		include: [
	  		  {
	  		  	model:db.Assignments,
	  		  	order: [[db.sequelize.fn("AVG", db.sequelize.col("grade")), "grade_AVG"]]
	  		}]
	  	}).then(function(dbGrades){
	  		res.json(dbGrades);
	  	});
	  });

};

function clear () {
	// counter = 0;
	scores = [];
	// avg = 0;
	sum = 0;
}

