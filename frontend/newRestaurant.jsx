var React = require('react');
var $ = require('jquery');

var NewRestaurant = React.createClass({ 
  getInitialState: function() {
    return ({
      name:'', neighborhood:'', cost: 0, address: '', cuisine:''
    });
  },
  addRestaurant: function() {
    $.ajax({
      url: '/api/restaurants',
      type: 'POST',
      data: this.state
    })
    .done((data) => {
      this.setState({name: data.name, neighborhood: data.neighborhood, cost: data.cost, address: data.address, cuisine: data.cuisine
      });
    })
  },
  handleNameChange: function(event){
    this.setState({name: event.target.value })
  },
  handleNeighborhoodChange: function(event){
    this.setState({neighborhood: event.target.value })
  },
  handleCostChange: function(event){
    this.setState({cost: event.target.value })
  },
  handleAddressChange: function(event){
    this.setState({address: event.target.value })
  },
  handleCuisineChange: function(event){
    this.setState({cuisine: event.target.value })
  },
  render: function() {
    return(
    <div>
       <form>
          <br/>
          <select onChange={this.handleCostChange} value={this.state.cost}>
            <option value='1'>$</option>
            <option value='2'>$$</option>
            <option value='3'>$$$</option>
            <option value='4'>$$$$</option>
          </select>
          <input onChange={this.handleNameChange} type='text' value={this.state.name} placeholder='Name'/>
          <input onChange={this.handleNeighborhoodChange} type='text' value={this.state.neighborhood} placeholder='Neighborhood'/>
          <input onChange={this.handleAddressChange} type='text' value={this.state.address} placeholder='Address'/>
          <input onChange={this.handleCuisineChange} type='text' value={this.state.cuisine} placeholder='Cuisine'/>
          <button onClick={this.addRestaurant}>Add Restaurant</button>
          <br/>
      </form>
    </div>
    )
  }
})

module.exports = NewRestaurant