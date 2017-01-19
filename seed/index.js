'use strict';

let restaurants = require('./restaurant.js')
let reviews = require('./review.js')
let Restaurant = require('../models').Restaurant
let Review = require('../models').Review

const seedyFunction = () => {
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
