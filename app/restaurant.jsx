var React = require('react')
var $ = require('jquery')
var Review = require('./review.jsx')

let Restaurant = React.createClass({
  getInitialState: function() {
    return ({
      restaurant: null,
      date: "",
      description: "",
      rating: ""
    })
  },
  componentDidMount(){
    this.getResInfo()
  },
    handleSubmit(event){
    event.preventDefault()
    const {date, description, rating} = this.state
    $.ajax({
      url: '/api/review',
      type: 'POST',
      data: {
        date,
        description,
        rating,
        RestaurantId: this.props.params.id
      }
    })
    .done(review => {
      console.log("reviee", review)
      this.getResInfo()
    })
  },
  getResInfo(){
    $.ajax({
      url: '/api/restaurants/' + this.props.params.id,
      type: 'GET'
    })
    .done(restaurant =>{
      this.setState({
        restaurant
      })
    })
  },
  handledate(event){
    this.setState({date: event.target.value})
  },
  handledes(event){
    this.setState({description: event.target.value})
  },
  handlerate(event){
    this.setState({rating: event.target.value})
  },
  render: function() {
    console.log(this.state.restaurant)
    let stars = ""
    let reviews = []
    let restaurant = this.state.restaurant
    return (

      <div>
        {restaurant && 
          <div>
            <h1>{restaurant.name}</h1>
            <strong>Neighborhood:</strong> {restaurant.neighborhood}<br/>
            <strong>Address:</strong> {restaurant.address}<br/>
            <strong>Cuisine:</strong> {restaurant.cuisine}<br/>
            <strong>Cost:</strong> {restaurant.cost}<br/>
          </div>}
          <ol>
          {restaurant && restaurant.Reviews.map((review, index)=>(
            <li key={index}>
              <strong>Date: </strong> {review.date}<br/>
              <strong>Rating: </strong> {review.rating}<br/>
              <strong>Description: </strong> {review.description}<br/>
            </li>
          ))}
          </ol>
        <div>
          <form onSubmit={this.handleSubmit}>
            <h1>Write A Review</h1>
            <input type="date" onChange={this.handledate}/> <br/>
            <textarea onChange={this.handledes} type="text" placeholder="Describe your experience"/> <br/>
            <select onChange={this.handlerate}>
              <option value="1">*</option>
              <option value="2">**</option>
              <option value="3">***</option>
              <option value="4">****</option>
              <option value="5">*****</option>
            </select><br/>
            <input type="submit" value="Submit Review" />
          </form>
        </div>
      </div>
    )
  }
})

module.exports = Restaurant
