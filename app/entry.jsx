var ReactDOM = require("react-dom")
var React = require('react')
import {browserHistory, IndexRoute, Router, Route} from 'react-router'
var Restaurants = require("./restaurants.jsx")
var Restaurant = require('./restaurant.jsx')


let App = React.createClass({
  render: function() {
    return(
      <div>
      	<Restaurants/>
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(	
	<Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/restaurants/:id' component={Restaurant} />
  </Router>
	,document.getElementById('root')
)
