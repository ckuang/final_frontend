var React = require('react')
var $ = require('jquery')
var NewReview = require('./review.jsx')


let Restaurant = React.createClass({
  getInitialState: function() {
    return {
      restaurant: null,
    }
  },

//this.props.params correlates with the "Route path" in the React Router
  componentDidMount: function(){
    $.ajax({
      type:'GET',
      url:"/api/restaurants/" + this.props.params.id,
      success:(oneRestaurant) => {
        console.log("THIS SHOWS ONE RESTAURANT OBJ ===>", oneRestaurant)
        //successfully received a restaurant obj and will now set the restaurant initial state with that obj
        //this.state.restaurant will now contain an obj.
        this.setState({
          restaurant: oneRestaurant
        })
      }
    })
  },

  render: function() {
    // console.log("THIS IS WHAT THIS.PROPS IS ===>", this.props)
    console.log("THIS IS WHAT THIS.PROPS.PARAMS IS ===>", this.props.params)
    console.log("THIS IS THE CURRENT STATE ==>", this.state.restaurant)
    // let stars = ""
    // let reviews = []
    if (this.state.restaurant) {
      return (
        <div>
          <h1>{this.state.restaurant.name}</h1> <br />
          <h3>Address: {this.state.restaurant.address}<br /></h3>
          <h3>Neighborhood: {this.state.restaurant.neighborhood} <br /></h3>
          <h3>Cuisine: {this.state.restaurant.cuisine} <br /></h3>
          <h3>Cost: ${this.state.restaurant.cost} <br /></h3><br />
        <div>
          <h2>Reviews<br /></h2>
          {this.state.reviews.map(function(review, idx){
            return (
              <h4 key={idx}>{idx + 1}) {review.date}<br />{review.description}<br />{review.rating}</h4>
            )
          })}
          <h1>Write A New Review</h1>
          <NewReview id={this.props.params.id} />
        </div>
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
})

module.exports = Restaurant
