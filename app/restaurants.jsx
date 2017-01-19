var React = require('react')
var $ = require('jquery')
var NewRestaurantForm = require('./newrestaurant.jsx')
import {Link} from 'react-router'

let Restaurants = React.createClass({
  getInitialState: function() {
    return({restaurants: null})
  },

  componentWillMount() {
    $.ajax({
      type: 'GET',
      url: '/api/restaurants'
    })
    .done((data) => {
      var final = data.map(function(a,b){
        return a.name
      })
      this.setState({restaurants: final})
      console.log(this.state.restaurants)
      // if(data) {
      //   console.log(data + ' is logged in!');
      //   this.setState({data: data});
      // } else {
      //   console.log('No on is logged in');
      // }
    })
  },

  render: function() {
    let restaurants = []
    if (this.state.restaurants) {
      return(
        <div>
          <ul>
            {this.state.restaurants.map(function(a,b){
              <li> {a} </li>
            })}

          </ul>
          <NewRestaurantForm />
        </div>
      )
    } else {
      return(
        <div>
          
          <h1>YALP</h1>
        </div>
      )
    }
  }
})

module.exports = Restaurants
