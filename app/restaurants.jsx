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
      url: '/api/restaurants',
      type: 'GET'
    })
    .done(data=>{
      this.setState({restaurants: data});
    })
  },
  render: function() {
    var restaurants = []
    if (this.state.restaurants) {
      return(
        <div>
          <h1>YALP</h1>
          <ol>
            {
              this.state.restaurants.map((ele,idx)=>
                <li key={idx}><Link to={'/restaurant/'+ele.id}>{ele.name}</Link></li>
              )
            }
          </ol>
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
