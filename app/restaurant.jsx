// IMPORT EVERYTHING
var React = require('react')
var $ = require('jquery')
var Review = require('./review.jsx')

// THE INDIVIDUAL RESTAURANT APP-----------------------------------------
var Restaurant = React.createClass({

  // GET THE INITIAL STATE
  getInitialState() {
    return ( {restaurant: null} )
  },

  // COMPONENT DID MOUNT TO FETCH FOR THE IND. RESTAURANT
  componentDidMount(){
    $.ajax({
      url: '/api/restaurants/' + this.props.params.id,
      type: 'GET'
    })

    // UPON SUCCESS
    .done ( (restaurantInfo) => {
      console.log(restaurantInfo)
      this.setState({restaurant: restaurantInfo})
    })
  },

  // THE FUNCTION FOR THE RESTAURANT COST
  restCost() {
    
    var restaurantCost = ""
    
    
    for (var i = 0; i < this.state.restaurant.restaurantCost; i++) {

        restaurantCost += '$'

    }

    return restaurantCost
  },

  // THE REVIEW DATE FUNCTION
  reviewDate (revDate) {
    console.log(revDate)
    return revDate.substring(0,10)
  },

  // THE RENDER FUNCTION
  render() {
    if (this.state.restaurant) {

      var restRating = ""
      var restInfo = this.state.restaurant
      var restReviews = this.state.restaurant.Reviews

      return (

        <div>
        <center><h1>{restInfo.name}</h1></center>
        <br/>
        <center><strong>Neighborhood: </strong>{restInfo.neighborhood}</center><br/>
        <center><strong>Address: </strong>{restInfo.address}</center><br/>
        <center><strong>Cuisine: </strong>{restInfo.cuisine}</center><br/>
        <center><strong>Cost: </strong>{this.restCost()}</center><br/>
          
        <hr />

        <center><h3>Reviews</h3></center>
        {
          restReviews.map ( (review, idx) => (
            
            <center>
              <div key={idx}>
                <strong>Date: </strong>{ this.reviewDate (review.date) }<br/>
                <strong>Rating: </strong>{ review.rating }<br/>
                <strong>Description: </strong>{ review.description }<br/>
              </div>
            </center>

          )

        )}
        <center><Review id={this.props.params.id} /></center>
        </div>
      )
    } 

    else {
      return (
        <div>Loading...</div>
      )
    }
  }
})

module.exports = Restaurant