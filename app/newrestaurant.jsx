var React = require('react')
var $ = require('jquery')

var NewRestaurant = React.createClass({
  getInitialState: function (){
    return {
      name: "",
      neighborhood: "",
      address: "",
      cuisine: "",
      cost: ""
    }
  },
  handleChange: function(change, e){
    this.setState({
      [change]: e.target.value
    })
  },
  submit: function(e) {
    $.ajax({
      url: 'api/restaurants',
      type: 'POST',
      data: this.state
    })
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input type="text" value={this.state.name} onChange={this.handleChange.bind(this, "name")} placeholder="Name"/>
          <input type="text" value={this.state.neighborhood} onChange={this.handleChange.bind(this, "neighborhood")} placeholder="Neighborhood"/>
          <input type="text" value={this.state.address} onChange={this.handleChange.bind(this, "address")} placeholder="Address"/>
          <input type="text" value={this.state.cuisine} onChange={this.handleChange.bind(this, "cuisine")} placeholder="Cuisine"/>
          <select value={this.state.cost} onChange={this.handleChange.bind(this, "cost")}>
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
