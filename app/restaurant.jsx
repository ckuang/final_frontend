var React = require('react')
var $ = require('jquery')
var Review = require('./review.jsx')

let Restaurant = React.createClass({
  getInitialState: function() {
    return ({restaurant: null})
  },
  componentDidMount() {
    let that = this;
    $.ajax({
      url: '/api/restaurants/' + this.props.params.id,
      success: function(data) {
        that.setState({restaurant: [data]})
      }
    })
  },
  displayRestaurant() {
    return this.state.restaurant.map((restaurant, i) => {
      return (
        <div key={i}>
          <h1 key={'key-'+i}>{restaurant.name}</h1>
          <h4 key={'key-1'}>Address: {restaurant.address}</h4>
          <h4 key={'key-2'}>Neighborhood{restaurant.neighborhood}</h4>
          <h4 key={'key-3'}>Cuisine: {restaurant.cuisine}</h4>
          <h4 key={'key-4'}>Cost: {restaurant.cost}</h4>
          <p></p>
        </div>
      )
    })
  },
  displayReviews() {
    return this.state.restaurant[0].Reviews.map((review, i) => {
      // console.log(review)
      return(
        <div key={'review-' +i}>
          <h4 key={'des-'+i}>{i+1 +'. '}{review.description}</h4>
          <h4 key={'rat-'+i}>Rating: {review.rating}</h4>
          <h4 key={'rev-'+i}>Date: {review.date}</h4>
          <hr key={'hr-'+ i}/>
        </div>
      )
    })
},
  render() {
    let stars = ""
    let reviews = []
    if (this.state.restaurant) {
      let id = this.state.restaurant[0].id
      return (
        <div>
            {this.displayRestaurant()}
            <Review id={id} />
            <h2>Review(s)</h2>
            {this.displayReviews()}
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
