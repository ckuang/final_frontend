var React = require('react')
var $ = require('jquery')
var NewRestaurantForm = require('./newrestaurant.jsx')
import {Link} from 'react-router'
/////////////
// Restaurants

// fetches information on all restaurants!!
// displays the names of all restaurants as a react-router Link
// clicking on a restaurant will change the URL and bring you to the Single Restaurant page
// renders a form that creates a new restaurant
/////////
let Restaurants = React.createClass({
  getInitialState: function() {
    return({restaurants: null})
  },
  componentDidMount(){
    $.ajax({
      url: '/api/restaurants',
      type: 'GET'
    }).done((data)=>{
      this.setState({restaurants: data})
    })
  },
  render: function() {
    let restaurants = []
    console.log(this.state.restaurants)
    if (this.state.restaurants) {
      return(
        <div>
          <h1>YALP</h1>
          Restaurant list:
          <ul>
            {
              this.state.restaurants.map((ele, idx)=>
                <li key={idx}><Link to={'/restaurant/' + ele.id}>{ele.name}</Link></li>
              )
            }
          </ul>
          <NewRestaurantForm/>
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
