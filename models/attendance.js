module.exports = function(sequelize, DataTypes){
    var Attendance = sequelize.define("Attendance",
    {
      student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
          len:[5]
        }
      },

      subject_id: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len:[1, 140]
        }
      },

      date:{
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate:{
          isDate: true
        }
      }

    });

    return Attendance;

};

Attendance.belongsTo(Student);
