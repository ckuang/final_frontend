'use strict';

module.exports = function (sequelize, DataTypes) {
    let Review = sequelize.define('Review', {
            rating:      { type: DataTypes.INTEGER },
            description: { type: DataTypes.STRING },
            date:        { type: DataTypes.DATEONLY },
        },
        {
            classMethods: {
                associate: (models) => {
                    Review.belongsTo(models.Restaurant)
                }
            }
        });
    return Review;

};
