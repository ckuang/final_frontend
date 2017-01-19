var ReactDOM = require("react-dom")
var React = require('react')
import {browserHistory, IndexRoute, Router, Route, Link} from 'react-router'
var Restaurants = require("./restaurants.jsx")
var Restaurant = require('./restaurant.jsx')
var NewRestaurant = require('./newrestaurant.jsx')
var Review = require('./review.jsx')

let App = React.createClass({
  render: function() {
    return(
      <div>
        <Link to='/createReview'>Create a new Review</Link> <br/>
        <Link to='/createRestaurant'>Create a new Restaurant</Link> <br/>
        <Restaurants />
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Restaurant}/>
      <Route path='createReview' component={Review}></Route>
      <Route path='createRestaurant' component={NewRestaurant}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
)
