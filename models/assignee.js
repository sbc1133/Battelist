module.exports = function(sequelize, DataTypes) {
  var Assignee = sequelize.define("Assignee", {
    assigneeName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,

    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail : true
        }
    },
  points: {
    type: DataTypes.INTEGER,
},

  });
  Assignee.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Assignee.hasMany(models.Task, {
      onDelete: "cascade"
    });
  };
  return Assignee;
    
  };
