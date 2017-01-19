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
      url: 'api/restaurants/',
      type:'GET',
      success: ((data)=>{
        console.log('RESTAURANT DATA:', data)
        data ? this.setState({restaurants: data}) : null
      })
    })
  },
  render: function() {
    let displayRestaurants
    if(this.state.restaurants){
      displayRestaurants = this.state.restaurants.map((val, idx)=>{
        return (
          <Link key={idx} to={'/' + val.id}>
            <li key={'li' + idx}>{val.name}</li>
          </Link>
          )
      }) 
    }
    if (this.state.restaurants) {
      return(
        <div>
          <h1>YALP</h1>
          <ol>{displayRestaurants}</ol>
          <br />
          <h2>Add Restaurant Below</h2>
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
