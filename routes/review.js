var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/', function(req, res) {
  models.Review.create({
    date: req.body.date,
    description: req.body.description,
    rating: req.body.rating,
    RestaurantId: req.body.RestaurantId,
  }).then(function(review) {
        res.send({message: 'Review successfully added!', review})
  });
});

module.exports = router;
