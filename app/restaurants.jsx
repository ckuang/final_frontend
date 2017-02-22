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

  componentDidMount(){
    $.ajax({
      type: 'GET',
      url: '/api/restaurants',
      success: (arrayofRestaurantObjs) => {
        console.log("THE DATA WE ARE GETTING BACK FROM RESTAURANTS API ====>", arrayofRestaurantObjs)
        this.setState({
          restaurants: arrayofRestaurantObjs
        });
      }
    })
  },

  render: function() {
    let restaurants = [];
    console.log("THIS IS THE STATE ====>", this.state)
    if (this.state.restaurants) {
      return(
        <div>
          <h1>YALP</h1>
          <div>
          <ul>
            {this.state.restaurants.map(function(restaurant, idx){
                console.log("THESE ARE THE RESTAURANTS ===>", restaurant)
                console.log("THIS IS THE ID===>",restaurant.id);

              return <li key={restaurant.id}><Link to={`/restaurant/${restaurant.id}`}><h1>{restaurant.name}</h1></Link>
              <h4>{restaurant.cuisine}</h4>
                <h3>{restaurant.address}</h3>
                <h3>{restaurant.neighborhood}</h3>
                <h4>{restaurant.cost}</h4>
                <h6>_________________________________________</h6>
                </li>
            })}
          </ul>
        </div>
        <div>
          {this.props.children}
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
