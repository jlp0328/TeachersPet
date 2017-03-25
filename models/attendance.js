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

      subject: {
        type: DataTypes.ENUM,
        allowNull: true,
        values: ["Period One", "Period Two", "Period Three", "Period Four", "Period Five", "Period Six", "Period Seven"],
        defaultValue: "Period One"
      },

      date:{
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate:{
          isDate: true
        }
      },

      presence: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["Present", "Tardy-Excused", "Tardy-Unexcused", "Absent"],
        defaultValue: "Present"
      },

    });

    return Attendance;

};

