var React = require('react')
var $ = require('jquery')
var NewRestaurantForm = require('./newrestaurant.jsx')
import {Link} from 'react-router'

let Restaurants = React.createClass({
  getInitialState: function() {
    return({restaurants: null})
  },
  componentDidMount() {
    let that = this;
    $.ajax({
      url: '/api/restaurants',
      success: function(data) {
        that.setState({restaurants: data})
      }
    })
  },
  displayRestaurants() {
    return this.state.restaurants.map((restaurant, i) => {
      return <li key={i}><Link to={'/restaurant/'+restaurant.id}>{restaurant.name}</Link></li>
    })
  },
  render: function() {
    let restaurants = []
    if (this.state.restaurants) {
      return(
        <div>
          <ul>{this.displayRestaurants()}</ul>
          <NewRestaurantForm />
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
