import React from'react';
import axios from 'axios';
import {Link} from 'react-router';

//Form component
import NewRestaurantForm from'./newrestaurant.jsx';

const Restaurants = React.createClass({
  getInitialState() {
    return {restaurants: null}
  },

  componentDidMount(){
    axios.get('/api/restaurants')
      .then( (response) => {
        console.log(response);
        this.setState({restaurants: response.data});
      })
  },

  render() {
    let restaurants = this.state.restaurants;
    if (restaurants) {
      return(
        <div>
          <h1>YALP</h1>
            <ul>
              {restaurants.map( (restaurant, idx) => {
                return(
                  <li key={idx}>
                    <Link to={'/restaurant/' + restaurant.id}><h4>{restaurant.name}</h4></Link>
                    <p>{restaurant.neighborhood}</p>
                  </li>
                )
              })}
            </ul>
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

export default Restaurants;