var React = require('react')
var $ = require('jquery')
var NewRestaurantForm = require('./newrestaurant.jsx')
import {Link} from 'react-router'

let Restaurants = React.createClass({
  getInitialState: function() {
    return({restaurants: null})
  },
  render: function() {
    let restaurants = []
    if (this.state.restaurants) {
      return(
        <div>
          <h1>YALP</h1>
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
