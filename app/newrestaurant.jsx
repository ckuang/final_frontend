var React = require('react')
var $ = require('jquery')

var NewRestaurant = React.createClass({
  getInitialState: function (){
    return{
      name: '',
      neighborhood: '',
      address: '',
      cuisine: '',
      cost: ''
    }
  },


  handleChange(input, e){
    this.setState({
      [input]: e.target.value
    })
    console.log("This is target", e.target.value)
  },

handleSubmit(e){
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: '/api/restaurants/',
    data: this.state,
    success: function(){
      console.log("Restaurant posted")
    }
  })
},


  render: function() {
    console.log("THIS IS THE NEW RESTAURANT STATE", this.state)
    return (
      <div>
        <form id="addRestaruant" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} onChange={this.handleChange.bind(this, "name")}  placeholder="Name" />
          <input type="text" value={this.state.neighborhood} onChange={this.handleChange.bind(this, "neighborhood")} placeholder="Neighborhood" />
          <input type="text" value={this.state.address} onChange={this.handleChange.bind(this, "address")} placeholder="Address" />
          <input type="text" value={this.state.cuisine} onChange={this.handleChange.bind(this, "cuisine")} placeholder="Cuisine" />
          <select form="addRestaurant" onChange={this.handleChange.bind(this, "cost")} >
            <option value="0"></option>
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
