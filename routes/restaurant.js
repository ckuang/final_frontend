var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Restaurant.findAll().then(function(restaurants) {
    res.send(restaurants)
  });
});

router.post('/', function(req, res) {
  models.Restaurant.create({
    name: req.body.name,
    neighborhood: req.body.neighborhood,
    address: req.body.address,
    cuisine: req.body.cuisine,
    cost: req.body.cost
  })
  .then(function(restaurant){
    res.send({message: 'Restaurant successfully added!', restaurant})
  })
});

router.get('/:id', function(req, res) {
  models.Restaurant.findOne({
    where: {id: req.params.id},
    include: [models.Review]
  }).then(function(restaurant) {
    res.send(restaurant)
  });
});

module.exports = router;
