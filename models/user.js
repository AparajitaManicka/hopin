module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        licensenumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            // validate: { isEmail: {msg: "Phone number invalid."} },
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    User.associate = function (models) {
        User.hasMany(models.Offeredride, {
            onDelete: "cascade"
        });
    };

    User.associate = function (models) {
        User.hasMany(models.Bookedride, {
            onDelete: "cascade"
        });
    };
   
   
    return User;
};
