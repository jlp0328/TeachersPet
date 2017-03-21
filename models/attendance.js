module.exports = function(sequelize, DataTypes){
    var Attendance = sequelize.define("Attendance",
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len:[1, 140]
        }
      },

      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len:[1, 140]
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
