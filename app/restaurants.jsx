var React = require('react')
var $ = require('jquery')
var NewRestaurantForm = require('./newrestaurant.jsx')
import {Link} from 'react-router'


let Restaurants = React.createClass({
  getInitialState: function() {
    return({restaurants: null})
  },

  componentDidMount(){
    $.ajax({
      url:'/api/restaurants', 
    })
    .done((data) => {
      this.setState({restaurants:data})
    })
  },

  render: function() {
    
    if (this.state.restaurants) {
      let restaurants = this.state.restaurants.map((val,indx) => {return <li key={val.id}><Link to={val.id.toString()}>{val.name}</Link></li>});
      
      return(
        <div>
          <h1>YALP</h1>
          <ol>{restaurants}</ol>
          <NewRestaurantForm />
        </div>
      )
    } else {
      return(
        <div>
          <h1>YALP</h1>
          <div>Loading...</div>
          <NewRestaurantForm />
        </div>
      )
    }
  }
})

module.exports = Restaurants
