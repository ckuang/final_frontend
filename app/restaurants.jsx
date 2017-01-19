// IMPORT EVERYTHING
var React = require('react')
var $ = require('jquery')
import {Link} from 'react-router'


// THE RESTAURANT COMPONENT
var Restaurants = React.createClass({

  // GET THE INITIAL STATE
  getInitialState() {
    return({restaurants: null})
  },

  // COMPONENT DID MOUNT TO GET ALL THE RESTAURANTS
  componentDidMount(){
    $.ajax({
      url: '/api/restaurants',
      type: 'GET'
    })

    // UPON SUCCESS
    .done((restData)=>
      this.setState({
        restaurants: restData
      })
    )
  },

  // THE RENDER FUNCTION
  render() {

    // THE RESTAURANTS ARRAY
    var restaurants = []
    if (this.state.restaurants) {
      return(
        <div>
          <center><h1>YEALP</h1></center>
          
          <hr />

          {
            // LOOP OVER THE RESTAURANTS KEY IN THE STATE AND DERIVE ALL THE RESTAURANTS
          }

          <ul>
            {this.state.restaurants.map( (restaurant, dex) =>
              <li key={dex} className="lineItems">
                <Link to={'/restaurants/' + restaurant.id}>{ restaurant.name }</Link>
              </li>
            )}
          </ul>          

        </div>
      )
    } 

    else {
      return(
        <div>Loading...Just a minute</div>
      )
    }
  }
})

module.exports = Restaurants;