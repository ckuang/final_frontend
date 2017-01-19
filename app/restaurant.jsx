var React = require('react')
var $ = require('jquery')
var Review = require('./review.jsx')

let Restaurant = React.createClass({
  getInitialState: function() {
    return ({restaurant: null})
  },
  componentDidMount(){
    $.ajax({
      url:"/api/restaurants/"+this.props.params.id,
      type: "GET"
    })
    .done(data=>{
      this.setState({restaurant:data});
    })
  },
  render: function() {
    let stars = ""
    let reviews = []
    if (this.state.restaurant) {
      var cost = ''
      for(var i = 0;i<this.state.restaurant.cost; i++){
        cost+= '$'
      }
      return (
        <div>
          <h2>{this.state.restaurant.name}</h2>
          <br/>
          <strong>Neighborhood: </strong>{this.state.restaurant.neighborhood}
          <br/>
          <strong>Address: </strong>{this.state.restaurant.address}
          <br/>
          <strong>Cuisine: </strong>{this.state.restaurant.cuisine}
          <br/>
          <strong>Cost: </strong>{cost}
          <h3>Reviews</h3>
          <ol>
            {
              this.state.restaurant.Reviews.map((ele, idx)=>
                <li key={idx}>
                <strong>Date: </strong>{ele.date.split('T')[0]}
                <br/>
                <strong>Rating: </strong>{ele.rating}
                <br/>
                <strong>Description: </strong>{ele.description}
                </li>
                )
            }
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
