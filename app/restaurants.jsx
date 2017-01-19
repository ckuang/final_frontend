var React = require('react')
var $ = require('jquery')
var NewRestaurantForm = require('./newrestaurant.jsx')
import {Link} from 'react-router'

let Restaurants = React.createClass({
  getInitialState: function() {
    return({restaurants: null})
  },
  componentDidMount: function() {
    $.ajax({
      url: "/api/restaurants",
      type: "GET",
      success: (data) => {
        this.setState({restaurants: data})
        console.log(data)
      }
    })
  },
  render: function() {
    if (this.state.restaurants) {
      var restaurants = this.state.restaurants
      return(
        <div>
          {
            restaurants.map((ele, ind) => {
              <Link to= key={ind}></Link>
            })
          }
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
