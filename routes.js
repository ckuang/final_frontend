var router = require('express').Router()
const Review = require('./models').Review
const Restaurant = require('./models').Restaurant

const getAllRestaurants = (req,res) => (
  Restaurant.findAll({
    attributes: ['name', 'id','neighborhood','cuisine','address','cost']
  })
  .then((Restaurant) =>
    res.send(Restaurant)
  )
);
 
 const createRestaurant = (req,res) => {
  Restaurant.create(req.body)
   .then(Restaurant=>{
     const createdRestaurant = Restaurant.get({plain: true});
     createdRestaurant.message = 'Restaurant successfully added!';
     res.send(createdRestaurant);
   })
};

const getOneRestaurant = (req,res) => {
  Restaurant.findById(req.params.id,{include: [{model:Review, required:true}]})
  .then((data)=>{
    res.send(data)
  })
}; 

const createReview = (req,res) => {
  Review.create(req.body)
   .then((Review)=>{
     const createdReview = Review.get({plain: true});
     createdReview.message = 'Review successfully added!';
     res.send(createdReview);
   })
};

router.route('/restaurants')
  .get(getAllRestaurants)
  .post(createRestaurant)

router.route('/restaurants/:id')
  .get(getOneRestaurant)

router.route('/review')
  .post(createReview)

router.route('/')

module.exports = router;