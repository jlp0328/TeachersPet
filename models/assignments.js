module.exports = function(sequelize, DataTypes) {
	var Assignments = sequelize.define("Assignments", 
	{
		student_id: {
 			type: DataTypes.INTEGER,
        	allowNull: false,
        	validate:{
          		len:[5]
        	}
		},
		assignment: {
			type: DataTypes.ENUM,
			allowNull: false,
			values: ["Assignment One", "Assignment Two", "Assignment Three", "Homework 1", "Homework 2", "Homework 3"]
		},
		grade: {
			type: DataTypes.INTEGER,
			allowNull: true,
			validate: {
				isNumeric: true
			}
		}

	});
	return Assignments;
};


