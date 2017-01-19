var React = require('react')
var $ = require('jquery')
var Review = require('./review.jsx')

let Restaurant = React.createClass({
  getInitialState: function() {
    return ({restaurant: null})
  },
  componentDidMount: function(){
    $.ajax({
      url: '/api/restaurants/'+this.props.params.id,
      type: 'GET'
    })
    .done((restaurantInfo)=>{
      console.log(restaurantInfo)
      this.setState({restaurant: restaurantInfo})
    })
  },
  costFunc: function(){
    let cost = ''
    for(var x=0; x<this.state.restaurant.cost; x++)
      {cost+='$'}
    return cost
  },
  dateFunc: function(date){
    return date.substring(0,10)
  },
  render: function() {
    if (this.state.restaurant) {
    let stars = ""
    let info = this.state.restaurant
    let reviews = this.state.restaurant.Reviews
      return (
        <div>
        <h2>{info.name}</h2>
        <br/>
        <strong>Neighborhood: </strong>{info.neighborhood}<br/>
        <strong>Address: </strong>{info.address}<br/>
        <strong>Cuisine: </strong>{info.cuisine}<br/>
        <strong>Cost: </strong>{this.costFunc()}<br/>
        <h3>Reviews</h3>
        <ol>
        {reviews.map(
          (review, indx)=>(
            <li key={indx}>
            <strong>Date: </strong>{this.dateFunc(review.date)}<br/>
            <strong>Rating: </strong>{review.rating}<br/>
            <strong>Description: </strong>{review.description}<br/>
            </li>
          )
        )}
        </ol>
        <Review id={this.props.params.id}/>
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
