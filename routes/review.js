var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/', function(req, res) {
  models.Review.create(req.body).then(function(review) {
        res.send({message: 'Review successfully added!', review})
  });
});

module.exports = router;
