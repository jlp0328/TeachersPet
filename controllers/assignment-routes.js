var express = require("express");
var db = require("../models");
var counter = 0;


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

	  //messing with gets and grades
	  // app.get("/assignments-grades/:id/:first_name/:last_name", function(req, res) {
	  // 	db.Student.findAndCountAll({

	  // 		include: [
	  // 		  {
	  // 		  	model:db.Assignments,
	  // 		  	 where: {grade: "99"
   //        }
	  // 			// attributes: [ db.Sequelize.fn("SUM", db.Sequelize.col("grade"), db.Sequelize.literal("+"), db.Sequelize("action.assignment.value")), "grade" ]
	  // 		}],

	  // 		where: {systemNumber: req.params.id,
   //              first_name: req.params.first_name,
   //              last_name: req.params.last_name
   //            }

	  // 	}).then(function(dbGrades){
	  // 		res.json(dbGrades);
	  // 		// res.render("grade", {
	  // 		// 	grade: dbGrades.count,
   //   //       		first_name: req.params.first_name,
   //   //       		last_name: req.params.last_name
	  // 		// });
	  // 	});
	  // });

	    app.get("/assignments-grades/:id/:first_name/:last_name", function(req, res) {
	  	db.Student.findAll({

	  		where: {systemNumber: req.params.id,
                first_name: req.params.first_name,
                last_name: req.params.last_name
              },
	  		include: [
	  		  {
	  		  	model:db.Assignments,
	  		  	// attributes: ["assignment", [db.sequelize.fn("AVG", db.sequelize.col("grade")), "count"]],
	  		  	// group: "grade",
	  		  	order: [[db.sequelize.fn("AVG", db.sequelize.col("grade")), "grade_AVG"]]
	  		}]


	  	}).then(function(dbGrades){
	  		// res.json(dbGrades);
	  	  if (counter < dbGrades.length) {	
	  		for (var i = 0; i < dbGrades.length; i++) {
	  			scores = [];
	  			for (var j = 0; j < dbGrades[0].Assignments.length; j++) {
	  				scores.push(dbGrades[i].Assignments[j].grade);
	  				console.log(scores);
	  			}
	  			counter ++;
	  		}
	  	  }//end of if counter
	  	  else {
	  	  	var sum = scores.reduce(function(a, b) {
	  	  		return a + b;
	  	  	},0);
	  	  	var avg = sum / scores.length;
	  	  }
	  	  console.log (sum/scores.length);
	  	  res.render("grade", {
	  	  	grade: avg
	  	  } );
	  		// var scores = [];
	  		// for (var j = 0; j < dbGrades[0].Assignments.length; j++) {
	  		// 		scores.push(dbGrades.Assignments[j].grade);
	  		// 		console.log(scores);
	  		// }
	  		// console.log(scores);
	  		
	  	 //  	var sum = scores.reduce(function(a, b) {
	  	 //  		return a + b;
	  	 //  	});
	  	 //  	var avg = sum / scores.length;
	  	  
	  	 //  console.log (avg);
	  	 //  res.render("grade", {
	  	 //  	grade: avg
	  	 //  } );

	  		
	  	});
	  });


};