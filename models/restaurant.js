'use strict';

module.exports = function (sequelize, DataTypes) {
    let Restaurant = sequelize.define('Restaurant', {
            name:           { type: DataTypes.STRING },
            neighborhood:   { type: DataTypes.STRING },
            cuisine:        { type: DataTypes.STRING },
            address:        { type: DataTypes.STRING },
            cost:           { type: DataTypes.FLOAT }
        },
        {
            classMethods: {
                associate: (models) => {
                    Restaurant.hasMany(models.Review)
                }
            }
        });
    return Restaurant;

};
