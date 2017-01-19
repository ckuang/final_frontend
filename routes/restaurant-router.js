const router = require('express').Router();
const Restaurant = require('../models').Restaurant;
const Review = require('../models').Review;

const getAllRestaurants = (req, res) => {
  Restaurant.findAll()
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    res.sendStatus(500)
  })
}

const createRestaurant = (req, res) => {
  Restaurant.create({
    name: req.body.name,
    neighborhood: req.body.neighborhood,
    address: req.body.address,
    cuisine: req.body.cuisine,
    cost: req.body.cost
  })
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.send(err)
  })
}

const getRestaurant = (req, res) => {
  Restaurant.findById(req.params.id,
    {include: [Review]})
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.send(err)
  })
}

router.route('/')
  .get(getAllRestaurants)
  .post(createRestaurant)


router.route('/:id')
  .get(getRestaurant)

module.exports = router;
