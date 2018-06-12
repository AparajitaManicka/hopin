module.exports = function (sequelize, DataTypes) {
    var Bookedride = sequelize.define("Bookedride", {
        pickup: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        dropoff: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        departure: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        seats: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    Bookedride.associate = function (models) {
        Bookedride.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    
    return Bookedride;
};
