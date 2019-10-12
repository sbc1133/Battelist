module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        taskName: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        assigneeName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
          selfAssigned: {
            type: DataTypes.BOOLEAN,
 
          },
          assigneeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
          prioritize: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
          score: {
            type: DataTypes.INTEGER,
          },
        
        assignee: {
          type: DataTypes.STRING,
          allowNull: false,
        }
      });
      return Task;
    };


