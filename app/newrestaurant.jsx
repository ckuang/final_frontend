var React = require('react')
var $ = require('jquery')

var NewRestaurant = React.createClass({
  getInitialState: function (){
    return{
      name: '',
      neighborhood: '',
      address: '',
      cuisine: '',
      cost:'1'
    }
  },
  handleChange(key ,event){
    this.setState({[key]: event.target.value})
  },
  handleSubmit(event){
    const {name, neighborhood, address, cuisine, cost} = this.state
    $.ajax({
      url: '/api/restaurants',
      type: 'POST',
      data: {
      name, neighborhood, address, cuisine, cost
      }
    })
  },
  render: function() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange.bind(this, 'name')} type="text" value={this.state.name} placeholder="Name"/>
          <input onChange={this.handleChange.bind(this, 'neighborhood')} value={this.state.neighborhood} type="text" placeholder="Neighborhood"/>
          <input onChange={this.handleChange.bind(this, 'address')} value={this.state.address} type="text" placeholder="Address"/>
          <input onChange={this.handleChange.bind(this, 'cuisine')} value={this.state.cuisine} type="text" placeholder="Cuisine"/>
          <select onChange={this.handleChange.bind(this, 'cost')} >
            <option value="1" default>$</option>
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
