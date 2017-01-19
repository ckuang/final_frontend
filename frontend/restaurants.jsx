var React = require('react');
var $ = require('jquery');
import {Link} from 'react-router';
import NewRestaurant from './newRestaurant.jsx';
var singleRestaurant = require('./singleRestaurant.jsx');

var Restaurants = React.createClass({
  getInitialState: function() {
    return ({restaurants: []})
  },
  componentDidMount: function() {
    $.ajax({
      url: '/api/restaurants',
      type: 'GET'
    })
    .done((data) => {
      this.setState({restaurants: data});
    })
  },
  render: function() {
  if(this.state.restaurants) {
      return(
        <div>
        <ul>
          {this.state.restaurants.map(function(restaurant){
            return (
              <li key={restaurant.id}>
              <Link to={'/restaurants/' + restaurant.id}> {restaurant.name}</Link>
              </li>
              )})}
          </ul>
          <NewRestaurant />
        </div>
      )
    } else {
      return (<div>Loading...</div>)
    }
  }
})

module.exports = Restaurants;