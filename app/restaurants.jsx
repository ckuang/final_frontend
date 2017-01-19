var React = require('react');
var $ = require('jquery');
var NewRestaurantForm = require('./newrestaurant.jsx');
import {Link} from 'react-router';
var Restaurant = require('./restaurant');
var NewRestaurant = require('./newrestaurant')

let Restaurants = React.createClass({
  getInitialState: function() {
    return({restaurants: null})
  },
  componentWillMount: function() {
    this.handleRetrieveRestaurants();
  },
  handleRetrieveRestaurants: function(){
    var that = this;
    $.ajax({
      url: '/api/restaurants',
      type: "GET"
    })
    .then(function(response){
      that.setState({
        restaurants: response
      })
    })
  },
  render: function() {
    let restaurants = []
    if (this.state.restaurants) {
      return(
        <div>
          <h1>YALP</h1>
          {this.state.restaurants.map((element, idx) =>{
            return (
                <Link to={"/restaurant/" + element.id} key={idx}>
                    <h1>{element.name}</h1>
                </Link>
            )
          })
        }
        <NewRestaurant />
        </div>
      )
    } else {
      return(
        <div>Loading...</div>
      )
    }
  }
})

module.exports = Restaurants
