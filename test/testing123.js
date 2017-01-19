process.env.NODE_ENV = 'test';

let models = require('../models')
let Restaurant = models.Restaurant;
let Review = models.Review;

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server.js');
let should = chai.should();

let restaurants = require('../seed/restaurant.js')
let reviews = require('../seed/review.js')
let seedFunction = require('../seed')

chai.use(chaiHttp);
//Our parent block
describe('Yalp', () => {
    beforeEach((done) => { //Before each test we empty the database
      models.sequelize.sync({force: true}).then(function() {
        seedFunction()
        done();
      })
    });
/*
  * Test the /GET route
  */
  describe('/GET restaurants', () => {
      it('it should GET all the restaurants', (done) => {
        chai.request(server)
            .get('/api/restaurants')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(4);
              done();
            });
      });
  });

  describe('/POST restaurant', () => {
      it('it should POST a restaurant ', (done) => {
        let restaurant = restaurants[1]
        chai.request(server)
            .post('/api/restaurants')
            .send(restaurant)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Restaurant successfully added!');
                res.body.restaurant.should.have.property('name');
                res.body.restaurant.should.have.property('neighborhood');
                res.body.restaurant.should.have.property('cuisine');
                res.body.restaurant.should.have.property('address');
                res.body.restaurant.should.have.property('cost');
              done();
            });
      });
  });

  describe('/POST review', () => {
      it('it should POST a review ', (done) => {
        let review = reviews[0]
        chai.request(server)
            .post('/api/review')
            .send(review)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Review successfully added!');
                res.body.review.should.have.property('rating');
                res.body.review.should.have.property('description');
                res.body.review.should.have.property('date');
              done();
            });
      });
  });

  describe('/GET restaurant', () => {
      it('it should GET a single restaurant along with all its reviews', (done) => {
        chai.request(server)
            .get('/api/restaurants/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.should.have.property('neighborhood');
                res.body.should.have.property('cuisine');
                res.body.should.have.property('address');
                res.body.should.have.property('cost');
                res.body.Reviews.should.be.a('array');
                res.body.Reviews.length.should.be.eql(2);
              done();
            });
      });
  });

});
