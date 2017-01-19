var React = require('react')
var $ = require('jquery')
var Review = require('./review.jsx')
import moment from 'moment';

let Restaurant = React.createClass({
  getInitialState: function() {
    return ({restaurant: null})
  },
  componentDidMount() {
    $.ajax({
      url: '/api/restaurants/'+this.props.params.id,
      type: 'GET'
    }).done((data)=>{
    console.log(data)
    // console.dir(this.props)
    this.setState({restaurant: data})
    })
  },
  render: function() {
    let stars = ""
    let reviews = []
    if (this.state.restaurant) {
      return (
        <div>
          <div>
            <h3>{this.state.restaurant.name}</h3>
            <div>
             Neighborhood: {this.state.restaurant.neighborhood}
              <p>Address: {this.state.restaurant.address}</p>
              <p>Cuisine: {this.state.restaurant.cuisine}</p>
              <p>Cost: {this.state.restaurant.cost}</p>
            </div>
            <h3>Reviews</h3>
              <ol>
                {this.state.restaurant.Reviews.map((a,idx)=>{
                  return (<li key={idx}>
                   <b>Date</b>: {moment(a.date).format(('YYYY MMMM Do'))}<br/>
                   <b>Rating</b>: {a.rating}<br/>
                   <b>Description</b>: {a.description}
                  </li>)
                })}
              </ol>
          </div>
          <div>
          <Review id={this.props.params.id} />
          </div>
        </div>
      )
    } else {
      return (
        <div>Loading...
        </div>
      )
    }
  }
})

module.exports = Restaurant