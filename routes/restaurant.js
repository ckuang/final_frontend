const router = require("express").Router();

// MODELS
const Restaurant = require("../models").Restaurant;
const Review = require("../models").Review;

// METHODS

// describe('/GET restaurants route', () => {
//       it('server should have a /api/restaurants GET route'
// describe('/GET restaurants functionality', () => {
//       it('route should GET all the restaurants'
const getAllRestaurant = (req, res) => (
	Restaurant.findAll()
	.then( restaurant => res.send(restaurant) )
)

// describe('/POST restaurant route', () => {
//       it('server should have a /api/restaurants POST route'
 // describe('/POST restaurant functionality', () => {
 //      it('route should POST a restaurant'
const createRestaurant = (req, res) => (
	Restaurant.create({
		name:           req.body.name,
		neighborhood:   req.body.neighborhood,
		cuisine:        req.body.cuisine,
		address:        req.body.address,
		cost:           req.body.cost
	})
	.then( restaurant => {
		// console.log("dataValues for restaurant before", restaurant.dataValues);
		restaurant.dataValues.message = "restaurant successfully added!";
		console.log("dataValues for restaurant", restaurant.dataValues)

		res.send(restaurant)
	})
)


const getOneRestaurant = (req, res) => {
    Restaurant.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {model: Review}]
        }
    )
        .then(restaurant => {
            console.log('restaurant data:',restaurant);
            res.send(restaurant)
        })

};



// ROUTES
router.route('/')
	.get(getAllRestaurant)
	.post(createRestaurant)

router.route('/:id')
	.get(getOneRestaurant)


module.exports = router;