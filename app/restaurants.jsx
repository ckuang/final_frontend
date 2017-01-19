var React = require('react')
var $ = require('jquery')
var NewRestaurantForm = require('./newrestaurant.jsx')
import {Link} from 'react-router'

let Restaurants = React.createClass({
  getInitialState: function() {
    return({restaurants: null})
  },
  componentDidMount: function(){
    $.ajax({
      url: '/api/restaurants',
      type: 'GET'
    })
    .done((restaurantsData)=>
      this.setState({restaurants: restaurantsData})
    )
  },
  render: function() {
    let restaurants = []
    if (this.state.restaurants) {
      return(
        <div>
          <h1>YALP</h1>
          <ol>
            {this.state.restaurants.map(
              (restaurant,index)=>
              <li key={index}><Link to={'/restaurants/'+restaurant.id}>{restaurant.name}</Link></li>
            )}
          </ol>
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
