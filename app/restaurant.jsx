var React = require('react')
var $ = require('jquery')
var Review = require('./review.jsx')

let Restaurant = React.createClass({
  getInitialState: function() {
    return ({restaurant: null})
  },

  componentDidMount(){
    var id = window.location.pathname;
    $.ajax({
      url:'/api/restaurants' + id, 
    })
    .done((data) => {
      this.setState({restaurant:data})
      console.log(data);
    })
  },

  render: function() {
    let stars = ""
    let reviews = []
    if (this.state.restaurant) {
      this.state.restaurant[0].Reviews.forEach((val,indx) => {reviews.push(<li><p>{val.date}</p><p>{val.rating}</p><p>{val.description}</p></li>)});

      return (
        <div>
          <h1>{this.state.restaurant[0].name}</h1>
          <p>{this.state.restaurant[0].neighborhood}</p>
          <p>{this.state.restaurant[0].address}</p>
          <p>{this.state.restaurant[0].cuisine}</p>
          <p>{this.state.restaurant[0].cost}</p>
          <h3>Reviews</h3>
          <ol>{reviews}</ol>
          <Review />
        </div>
      )
    } else {
      return (
        <div>
          <h1>YALP</h1>
          <p>Loading...</p>
          <Review />
        </div>
      )
    }
  }
})

module.exports = Restaurant
