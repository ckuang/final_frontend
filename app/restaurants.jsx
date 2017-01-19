'use strict';

var React = require('react')
var $ = require('jquery')
var NewRestaurantForm = require('./newrestaurant.jsx')
import {Link} from 'react-router'


// fetches information on all restaurants
// displays the names of all restaurants as a react-router Link
// clicking on a restaurant will change the URL and bring you to the Single Restaurant page
// renders a form that creates a new restaurant

const Restaurants = React.createClass({
  getInitialState: function() {
    return({restaurants: null})
  },
  componentDidMount(){
    $.ajax({
      url: '/api/restaurants',
      type: 'GET',
    })
    .done(restaurant => this.setState({restaurants: restaurant}))
  },
  render: function() {
    let restaurants = []
    if (this.state.restaurants) {
      return(
        <div>
          <h1>YALP</h1>

        <ol>

          {this.state.restaurants ?
            this.state.restaurants.map((restaurant, index)=>
            <li key={index} onClick={this.redirect.bind(this, restaurant.id)}>{restaurant.name}</li>) :
             <p>Sorry we can't find any restaurants right now</p>
          }

        </ol>

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
