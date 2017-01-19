var React = require('react')
var $ = require('jquery')

var NewRestaurant = React.createClass({
  getInitialState: function (){
    return ({name: null, neighborhood: null, address: null, cuisine: null, cost: null})
  },
  handleSubmit() {
    let data = this.state
    $.ajax({
      url: '/api/restaurants',
      method: 'POST',
      data: data
    })
  },
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} name='name' placeholder="Name"/>
          <input type="text" onChange={this.handleChange} name='neighborhood' placeholder="Neighborhood"/>
          <input type="text" onChange={this.handleChange} name='address' placeholder="Address"/>
          <input type="text" onChange={this.handleChange} name='cuisine' placeholder="Cuisine"/>
          <select name="cost" onChange={this.handleChange}>
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
