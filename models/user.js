module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
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
        }


      });

      User.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        User.hasMany(models.Task, {
          onDelete: "cascade"
        });
      };
      return User;
    
};
