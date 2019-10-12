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
          type: DataTypes.INTEGER,

        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail : true
            }
        }

      });
      return User;
    
};
