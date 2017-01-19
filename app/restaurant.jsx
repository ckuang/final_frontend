var React = require('react')
var $ = require('jquery')
var Review = require('./review.jsx')

let Restaurant = React.createClass({
  getInitialState: function() {
    return ({restaurant: null, review: []})
  },
  componentDidMount(){
    console.log('CHECK',this.props.params.id)
    $.ajax({
      url: 'api/restaurants/' + this.props.params.id,
      type: 'GET',
      success: ((data)=>{
        console.log('DATA:',data.Reviews)
        data ? this.setState({restaurant: data}) : null
        data ? this.setState({review: data.Reviews}) : null
      })
    })
  },
  render: function() {
  console.log('review:', this.state.review)
  let displayReview
  displayReview = this.state.review.map((val, idx)=>{
      return (<li key={idx}>
        <p key={'one key'+idx}>Date: {val.date}</p>
        <p key={'two key'+idx}>Rating: {val.rating}</p>
        <p key={'three key'+idx}>Description: {val.description}</p>
      </li>)
    })
  
    if (this.state.restaurant) {
      return (
        <div>
          <h1>Name: {this.state.restaurant.name}</h1>
            <p>Address: {this.state.restaurant.address}</p>
            <p>Cuisine: {this.state.restaurant.cuisine}</p>
            <p> Cost: {this.state.restaurant.cost}</p>
          <h1>Reviews</h1>
            <ol>
               {displayReview}
            </ol>
            <h1>Create a review</h1>
            <Review idProp={this.props.params.id} />
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
