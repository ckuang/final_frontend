var React = require('react');
var $ = require('jquery');
var NewRestaurantForm = require('./newrestaurant.jsx');
import {Link, browserHistory} from 'react-router';

let Restaurants = React.createClass({
  getInitialState: function() {
    return({restaurants: null})
  },
  componentDidMount() {
    $.ajax({
      url: '/api/restaurants',
      type: 'GET'
    }).done((data)=>{
    console.log(data)
    this.setState({restaurants: data})
    })
  },
  handleClick(event) {
    browserHistory.push('/'+event.target.value)
    // console.log(event.target.value)
  },
  render: function() {
    let restaurants = []
    if (this.state.restaurants) {
      return(
        <div>
          <h1>YALP</h1>
          <div id='allrest-div'>
            <ol id='allrest-ol'>
              {this.state.restaurants.map((a,idx)=>{
                return <li key={idx} value={a.id} onClick={this.handleClick}>{a.name}</li>
              })}
            </ol>
          </div>
          <div><NewRestaurantForm /></div>
        </div>
      )
    } else {
      return(
        <div>Loading... teehee</div>
      )
    }
  }
})

module.exports = Restaurants

