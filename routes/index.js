var models  = require('../models');
var express = require('express');
var router  = express.Router();
var restaurantRouter = require('./restaurant.js')
var reviewRouter = require('./review.js')

router.use("/restaurants", restaurantRouter)
router.use("/review", reviewRouter)

module.exports = router;
