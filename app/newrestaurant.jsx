var React = require('react')
var $ = require('jquery')

var NewRestaurant = React.createClass({
  getInitialState: function (){
    return({
      Name:'', Neighborhood:'', Address:'', Cuisine:'', Cost: 1
    })
  },
  handleChange: function(eventType, event){
    this.setState({
      [eventType]: event.target.value
    })
  },
  submitEntry: function(e){
    var entry = this.state;
    $.ajax({
      url: '/api/restaurants',
      type: 'POST',
      data: {
        name: entry.Name,
        neighborhood: entry.Neighborhood,
        address: entry.Address,
        cuisine: entry.Cuisine,
        cost: entry.Cost
      }
    })
    .done((response)=>console.log(response.message))
  },
  render: function() {
    console.log(this.state)
    return (
      <div>
        <form>
          <input type="text" onChange={this.handleChange.bind(this, 'Name')} value={this.state.Name} placeholder="Name"/>
          <input type="text" onChange={this.handleChange.bind(this, 'Neighborhood')} value={this.state.Neighborhood} placeholder="Neighborhood"/>
          <input type="text" onChange={this.handleChange.bind(this, 'Address')} value={this.state.Address} placeholder="Address"/>
          <input type="text" onChange={this.handleChange.bind(this, 'Cuisine')} value={this.state.Cuisine} placeholder="Cuisine"/>
          <select onChange={this.handleChange.bind(this, 'Cost')}>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>
          <input type="submit" value="Add New Restaurant" onClick={this.submitEntry}/>
        </form>
      </div>
    )
  }
});


module.exports = NewRestaurant
