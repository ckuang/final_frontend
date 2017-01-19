var React = require('react');
var $ = require('jquery');
var NewReview = require('./newReview.jsx');

var SingleRestaurant = React.createClass({
  getInitialState: function() {
    return ({
      name: '', neighborhood:'', cost:0, address: '', cuisine:'', reviews:[]
    });
  },
  componentDidMount: function() {
      $.ajax({
      url: '/api/restaurants/' + this.props.params.id,
      type: 'GET'
    })
    .done((data) => {
      console.log('this is the response from the get call on single',data)
      this.setState({ name: data.name, neighborhood: data.neighborhood, cost: data.cost, address: data.address, cuisine: data.cuisine, reviews: data.Reviews});
    })
  },  
  render: function() {
    var RestaurantId = this.props.params.id
    if(this.state.reviews) {
      return(
        <div>
           <div><h1>{this.state.name}</h1></div>
           <p>Neighborhood: {this.state.neighborhood}</p>
           <p>Cost: {this.state.cost}</p>
           <p>Cuisine: {this.state.cuisine}</p>
           <p>Adress: {this.state.address}</p>
           <ul>
             {this.state.reviews.map(function(review){
                  return (
                    <li key={review.id}>
                    <h3>Review {review.id}</h3>
                       <p>Rating: {review.rating}</p>
                       <p>Date: {review.date}</p>
                       <p>Description: {review.description}</p>
                    </li>
                  )
              })}
           </ul>
           <NewReview RestaurantId={RestaurantId}/>
        </div>
      )
    } else {
      return (<div>Loading...</div>)
    }
  }
})

module.exports = SingleRestaurant