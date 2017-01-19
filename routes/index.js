const router = require('express').Router()

router.use('/restaurants', require('./restaurant-router'));
router.use('/review', require('./review-router'));

module.exports = router;
