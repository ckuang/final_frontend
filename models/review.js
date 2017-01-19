"use strict";

module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    rating: DataTypes.INTEGER,
    date: DataTypes.STRING,
    description: DataTypes.STRING
  } 
  ,{
	    classMethods: {
	      associate: function(models) {
	        Review.belongsTo(models.Restaurant)
	      }
	    }
	  }
  );
  return Review;
};
//DATE
//how do i IMPLEMENT THIS DATE?
//[sequelize.fn('date_format', sequelize.col('date_col'), '%Y-%m-%d'), 'date_col_formed']
 // ]})