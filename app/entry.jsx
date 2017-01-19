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
  <Router history={hashHistory}>
     <Route path='/' component={entry}>
       <IndexRoute component={Newrestaraunt} />
        <Route path="restaurant" component={Restaurant} />
        <Route path="restaraunts" component={Restaurants} />
        <Route path="review" componet={Review} />
     </Route>
  </Router>
)

)
