// IMPORT EVERYTHING
var React = require('react')
var $ = require('jquery')

// THE COMPONENT FOR A NEW RESTAURANT
var NewRestaurant = React.createClass({
  
  // GET THE INITIAL STATE
  getInitialState() {
    return ( {Name:'', Neighborhood:'', Address:'', Cuisine:'', Cost: 1} )
  },

  // HANDLECHANGE
  handleChange (eventType, event) {
    
    this.setState ({
      [eventType]: event.target.value
    })
    
  },

  // SUBMIT AN ENRTY COMPONENT
  submitEnt(e){

    // HOLD THE STATE
    var restState = this.state;

    // AJAX CALL TO GET A PARTICULAR RESTAURANT
    $.ajax({
      url: '/api/restaurants',
      type: 'POST',
      data: {
          name: restState.Name,
          neighborhood: restState.Neighborhood,
          address: restState.Address,
          cuisine: restState.Cuisine,
          cost: restState.Cost
      }
    })

    // UPON SUCCESS
    .done( (response) => console.log (response.message) )
  },

  // THE RENDER FUNCTION
  render: function() {
  
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
          <input type="submit" value="Add New Restaurant" onClick={this.submitEnt}/>
        </form>
      </div>
    )
  }
});


module.exports = NewRestaurant