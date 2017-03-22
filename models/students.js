module.exports = function(sequelize, DataTypes){
    var Student = sequelize.define("Student",
    {
      student_id: {
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

      subject_id: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["Period One", "Period Two", "Period Three", "Period Four", "Period Five", "Period Six", "Period Seven"]
      },

      birthday:{
        type: DataTypes.DATEONLY,
        allowNull: false,
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
