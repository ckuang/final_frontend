var models  = require('../models');
var express = require('express');
var router  = express.Router();


//req is what you are getting (request)
//res is what you are giving (response)
router.post('/', function(req, res) {
  models.Review.create(
    {
      rating:req.body.rating,
      description: req.body.description,
      date: req.body.date,
      RestaurantId: req.body.RestaurantId
    })
    .then(function(review) {
        res.send({message: 'Review successfully added!', review})
  });
});

module.exports = router;
