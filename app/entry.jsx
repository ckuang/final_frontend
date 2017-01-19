var ReactDOM = require("react-dom")
var React = require('react')
import { render } from 'react-dom'
import {browserHistory, IndexRoute, Router, Route} from 'react-router'
var Restaurants = require("./restaurants.jsx")
var Restaurant = require('./restaurant.jsx')
var NewRestaurant = require('./newrestaurant.jsx')
var Review = require('./review.jsx')


let App = React.createClass({
  render: function() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Restaurants} />
      <Route path=":id" component={Restaurant}/>
    </Route>
  </Router>
), document.getElementById('root'))
