const router = require('express').Router();
const Restaurant = require('../models').Restaurant
const Review = require('../models').Review;

const createReview = (req, res) => {
  Review.create({
    date: req.body.date,
    rating: req.body.rating,
    description: req.body.description
  })
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.send(err)
  })
}

router.route('/')
  .post(createReview)

module.exports = router;
