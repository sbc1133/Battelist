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
    taskName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
  },
    phoneNumber: {
      type: DataTypes.INTEGER,

    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail : true
        }
    },
    notificationTime: {
      type: DataTypes.DATETIME,
      allowNull: false,
      validate: {
        len: [1]
      }
  },
  points: {
    type: DataTypes.INTEGER,
},

  });
  return Assignee;
    
  };
