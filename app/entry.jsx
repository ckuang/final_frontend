
var ReactDOM = require("react-dom")
var React = require('react')
import {browserHistory, IndexRoute, Router, Route} from 'react-router'
var Restaurants = require("./restaurants.jsx")
var NewRestaurant = require('./newrestaurant.jsx')



var App = React.createClass({
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
			<Route path='/' component={Restaurants}>
				<IndexRoute component={NewRestaurant}/>

			</Route>
		</Router>,
  document.getElementById('root')

)
