module.exports = function (sequelize, DataTypes) {
    var Offeredride = sequelize.define("Offeredride", {
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
        },
        comment: {
            type: DataTypes.TEXT,
        }
    });

    Offeredride.associate = function (models) {
        Offeredride.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    
    return Offeredride;
};
