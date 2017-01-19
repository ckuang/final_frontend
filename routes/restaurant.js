const router = require('express').Router();

//REQUIRE MODELS
const Restaurant = require('../models').Restaurant;
const Review = require('../models').Review;

//FUNCTIONS
const getAllRestaurants = (req,res)=>(
  Restaurant.findAll()
  .then(RestaurantsInfo=>res.send(RestaurantsInfo))
)

const createRestaurant = (req,res)=>(
  Restaurant.create({
    name: req.body.name,
    cost: req.body.cost,
    neighborhood: req.body.neighborhood,
    address: req.body.address,
    cuisine: req.body.cuisine
  })
  .then(RestaurantInfo=>{
    RestaurantInfo.dataValues.message = 'Restaurant successfully added!';
    RestaurantInfo.dataValues.restaurant = {
      name: RestaurantInfo.name,
      neighborhood: RestaurantInfo.neighborhood,
      cuisine: RestaurantInfo.cuisine,
      address: RestaurantInfo.address,
      cost: RestaurantInfo.cost
    };
    res.send(RestaurantInfo)
  })
)

const getOneRestaurant = (req,res)=>(
  Restaurant.findOne({
    where: {id: req.params.id},
    include: {model: Review}
  })
  .then(RestaurantInfo=>res.send(RestaurantInfo))
)

//ROUTES
router.route('/')
  .get(getAllRestaurants)
  .post(createRestaurant)

router.route('/:id')
  .get(getOneRestaurant)

module.exports = router