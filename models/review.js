
"use strict";

module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    rating: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Review.belongsTo(models.Restaurant)
      }
    }
  });

  return Review;
};