var ReactDOM = require("react-dom")
var React = require('react')
import {browserHistory, IndexRoute, Router, Route} from 'react-router'
var Restaurants = require("./restaurants.jsx")
var Restaurant = require('./restaurant.jsx')


let App = React.createClass({
  render: function() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component= {Restaurants} />
      <Route path="/restaurants" component={Restaurants} />
      <Route path="/restaurant/:id" component={Restaurants} />


    </Route>
  </Router>
), document.getElementById('root'));
