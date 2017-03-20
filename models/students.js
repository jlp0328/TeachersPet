module.exports = function(sequelize, DataTypes){
    var Student = sequelize.define("Student",
    {
      student_name: {
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
        validate:{}
      },

      iep_modifications:{
        type: DataTypes.TEXT,
        allowNull: true,
        validate:{}
      }
    });
    return Student;
    //Anything that runs this function and returns
    //Make variable consistent with the filename

};
