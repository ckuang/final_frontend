const router = require("express").Router();

// MODELS
const Restaurant = require("../models").Restaurant;
const Review = require("../models").Review;

// METHODS


// describe('/POST review route', () => {
//       it('server should have a /api/restaurant/:id route'
 // describe('/POST review functionality', () => {
 //      it('route should POST a review '
const createReview = (req, res) => (
	Review.create({
		rating: 			req.body.rating,
		description: 	req.body.description,
		date:        	req.body.date,
		id: 					req.body.id
	})
	.then( review => {
		review.dataValues.message = "review successfully added!";
		console.log("dataValues for review", review.dataValues)

		res.send(review)
	})
)



// ROUTES
router.route('/')
	.post(createReview)



module.exports = router;