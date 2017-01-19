const restaurantRouter = require('express').Router();
const Restaurant = require('../models').Restaurant;
const Review = require('../models').Review;


const getAllRestaurants = ((req,res) => {
  Restaurant.findAll()
    .then((info) => {
      res.send(info)
    })
    .catch((error) => {
      console.log(error)
      res.send("Trouble getting restaurants.")
    })
})

const makeARestaurant = ((req,res) => {
  Restaurant.create({
    name: req.body.Name,
    neighborhood: req.body.Neighborhood,
    address: req.body.Address,
    cuisine: req.body.Cuisine,
    cost: req.body.Cost,
  })
  .then((info) => {
    res.send(info)
  })
  .catch((error) => {
      console.log(error)
      res.send("Trouble posting a restaurant.")
    })
})

const displayRestaurantAndReviews = ((req,res) => {
  Restaurant.findAll({
    where: {id: req.params.id},
    include:[Review]
  })
  .then((info) => {
      res.send(info)
    })
    .catch((error) => {
      console.log(error)
      res.send("Trouble getting the restaurant.")
    })
})

//------------------------
restaurantRouter.route('/')
  .get(getAllRestaurants)
  .post(makeARestaurant)
restaurantRouter.route('/:id')
  .get(displayRestaurantAndReviews)


module.exports = restaurantRouter