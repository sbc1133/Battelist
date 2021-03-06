module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        taskName: {
          type: DataTypes.STRING,
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
        

          score: {
            type: DataTypes.INTEGER,
          },
        
      });

      Task.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Task.belongsTo(models.User, {
          onDelete: "cascade"
        });

        Task.belongsTo(models.Assignee,{
          onDelete: "cascade"
        })
      };

    
      return Task;


    };


