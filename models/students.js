module.exports = function(sequelize, DataTypes){
    var Student = sequelize.define("Student",
    {
      systemNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
          len:[5]
        }
      },

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

      subject: {
        type: DataTypes.ENUM,
        allowNull: true,
        values: ["Period One", "Period Two", "Period Three", "Period Four", "Period Five", "Period Six", "Period Seven"],
        defaultValue: "Period One"
      },

      birthday:{
        type: DataTypes.DATEONLY,
        allowNull: true,
        validate:{
          isDate: true
        }
      },

      allergies: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      iep_modifications:{
        type: DataTypes.TEXT,
        allowNull: true,
      },

      active_status:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
      }
    });

    return Student;

};
