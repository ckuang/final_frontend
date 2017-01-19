var React = require('react')
var $ = require('jquery')
var NewRestaurantForm = require('./newrestaurant.jsx')
var Restaurant = require('./restaurant.jsx')
var Review = require('./review.jsx')


import {Link} from 'react-router'

let Restaurants = React.createClass({
  getInitialState: function() {
    return({restaurants: null, id:null})
  },

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/api/restaurants'
    })
    .done((data) => {
      var final = data.map(function(a,b){
        return a
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

  getId(id) {
    console.log(id)
    this.setState({id: id})
    console.log(this.state.id)


  },

  render: function() {
    let restaurants = []
    if (this.state.restaurants) {
      return(
        <div>
          <NewRestaurantForm />
          <ul>
            {this.state.restaurants.map(function(a,b){
              // console.log(a.id)
              return <li onClick ={this.getId.bind(this, a.id)} key ={b}> <Link to ={'/reviews'}>{a.name} </Link></li>
            }.bind(this))}

          </ul>
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
