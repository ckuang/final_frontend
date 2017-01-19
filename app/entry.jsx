var ReactDOM = require("react-dom");
var React = require('react');
import {browserHistory, IndexRoute, Router, Route} from 'react-router';
var Restaurants = require("./restaurants.jsx");
var Restaurant = require('./restaurant.jsx');
var NewRestaurant = require('./newrestaurant');
var Review = require('./review');

let App = React.createClass({
  render: function() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Restaurants} />
      <Route path="/addres" component={NewRestaurant} />
      <Route path="/addrev" component={Review} />
      <Route path="/restaurant/:id" component={Restaurant} />
    </Route>
  </Router>,
  document.getElementById('root')
)
