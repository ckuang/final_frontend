var React = require('react')
var $ = require('jquery')
var Review = require('./review.jsx')

let Restaurant = React.createClass({
  getInitialState: function() {
    return ({restaurant: null})
  },
  componentDidMount: function(){
    var that = this;
    $.ajax({
      url: '/api/restaurants/' + this.props.params.id,
      type: 'GET'
    })
    .then(function(response){
      that.setState({
        restaurant: response
      })
    })
  },
  render: function() {
    let stars = ""
    let reviews = []

    if (this.state.restaurant) {
      return (
        <div>
          {/* {console.log(this.state.restaurant)} */}
          <h1>{this.state.restaurant.name}</h1>
          <h3>{this.state.restaurant.neighborhood}</h3>
          <h3>{this.state.restaurant.address}</h3>
          <h3>{this.state.restaurant.cuisine}</h3>
          <h3>{this.state.restaurant.cost}</h3>
          {this.state.restaurant.Reviews.map((element, index) => {
            return (
              <p key={index}>{element.description}</p>
            )
            })
          }
          <Review id={this.state.restaurant.id}/>
        </div>
      )
    } else {
      return (
        <div>
          <div>Loading...</div>
        </div>
      )
    }
  }
})

module.exports = Restaurant
