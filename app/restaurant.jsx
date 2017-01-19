var React = require('react')
var $ = require('jquery')
var Review = require('./review.jsx')

let Restaurant = React.createClass({
  getInitialState: function() {
    return ({restaurant: null})
  },
  render: function() {
    let stars = ""
    let reviews = []
    if (this.state.restaurant) {
      return (
        <div>

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
