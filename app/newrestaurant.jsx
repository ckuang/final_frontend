var React = require('react')
var $ = require('jquery')

var NewRestaurant = React.createClass({
  getInitialState: function (){
    return ({
      
    })
  },
  render: function() {
    return (
      <div>
        <form>
          <input type="text" value={this.state.name} placeholder="Name"/>
          <input type="text" placeholder="Neighborhood"/>
          <input type="text" placeholder="Address"/>
          <input type="text" placeholder="Cuisine"/>
          <select>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>
          <input type="submit" value="Add New Restaurant" />
        </form>
      </div>
    )
  }
});


module.exports = NewRestaurant
