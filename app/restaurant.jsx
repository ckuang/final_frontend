import React from'react'
import axios from 'axios';
import moment from 'moment'

//component
import Review from'./review.jsx'

const Restaurant = React.createClass({
  getInitialState() {
    return {restaurant: null}
  },

  componentDidMount(){
    axios.get('/api/restaurants/' + this.props.params.restId)
      .then( (response) => {
        this.setState({restaurant: response.data});
      })
  },

  render() {
    let restaurant = this.state.restaurant
    if (restaurant) {
    let reviews = restaurant.Reviews;
    //let stars = reviews.reduce( (total = 0, review) => total += review.rating ) / reviews.length
      return (
        <div>
          <h1>{restaurant.name}</h1>

          <strong>Neighborhood: </strong>{restaurant.neighborhood} <br />
          <strong>Address: </strong>{restaurant.address} <br />
          <strong>Cuisine: </strong>{restaurant.cuisine} <br />
          <strong>Cost: </strong>{restaurant.cost} <br />

          <h3>Reviews</h3>
            <ol>
              {reviews.map( (review, idx) => {
                return(
                  <li key={idx}>
                    <strong>Date: </strong>{moment(review.date).format('MM/DD/YYYY')} <br />
                    <strong>Rating: </strong>{review.rating} <br />
                    <strong>Description: </strong>{review.description} <br />
                  </li>
                )
              })}
            </ol>

          <h3>Write a New Review</h3>

          <Review id={restaurant.id}/>

        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
})

export default Restaurant;