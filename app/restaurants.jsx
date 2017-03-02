var React = require('react')
var $ = require('jquery')
var NewRestaurantForm = require('./newrestaurant.jsx')
import {Link} from 'react-router'

let Restaurants = React.createClass({
  getInitialState: function() {
    return {
      restaurants: null,
    }
  },

  componentDidMount: function(){
    $.ajax({
      type: 'GET',
      url: '/api/restaurants',
      success: (arrayofRestaurantsObjs) => {
        console.log("THE DATA WE ARE GETTING BACK FROM RESTAURANTS API ====>", arrayofRestaurantsObjs)
        this.setState({
          restaurants: arrayofRestaurantsObjs
        });
      }
    })
  },


  render: function() {
    console.log(this.props)
    let restaurants = [];
    console.log("THIS IS THE STATE ====>", this.state)
    if (this.state.restaurants) {
      return(
        <div>
          <h1>YALP</h1>
          <div>
          <ul>
            {this.state.restaurants.map(function(restaurant){
                console.log("THESE ARE THE RESTAURANTS ===>", restaurant)
              return <li key={restaurant.id}><Link to={'/restaurant/' + restaurant.id}><h1>{restaurant.name}</h1></Link>
                </li>
            })}
          </ul>
        </div>
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
