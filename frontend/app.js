var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var SingleRestaurant = require('./singleRestaurant.jsx');
var Restaurants = require('./restaurants.jsx');
import {withRouter, Router, Route, Link, browserHistory} from 'react-router';

var App = withRouter(React.createClass({
  render: function() {
    return(
      <div>
      <h1>Yalp</h1>
        <Restaurants />
        {this.props.children}
      </div>
    )
  }
}))

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}></Route>
    <Route path='restaurants' component={Restaurants}></Route>
    <Route path='restaurants/:id' component={SingleRestaurant}></Route>
  </Router>,
  document.getElementById('root')
)