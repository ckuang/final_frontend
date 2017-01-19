let restaurants = require('./restaurant.js');
let reviews = require('./review.js');
const Restaurant = require('../models').Restaurant;
const Review = require('../models').Review;

function seedyFunction() {
  Restaurant.create(restaurants[0])
  Restaurant.create(restaurants[1])
  Restaurant.create(restaurants[2])
  Restaurant.create(restaurants[3])
  Review.create(reviews[0])
  Review.create(reviews[1])
  Review.create(reviews[2])
  Review.create(reviews[3])
  Review.create(reviews[4])
}

module.exports = seedyFunction
