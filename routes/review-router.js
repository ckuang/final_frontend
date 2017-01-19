const reviewRouter = require('express').Router();
const Review = require('../models').Review;

const addAReview = ((req,res) => {
  Review.create({
    rating:req.body.Rating,
    date:req.body.Date,
    description:req.body.Description
  })
  .then((review) => {
    review.setRestaurant(req.params.id)
    res.send(review);
  })
  // .then((info) => {
  //   res.send("Review added")
  // })
  .catch((error) => {
    console.log(error)
    res.send("Trouble posting review")
  })
})

//------------------------
reviewRouter.route('/:id')
  .post(addAReview)

module.exports = reviewRouter