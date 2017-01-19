import React from'react'
import axios from 'axios'

const NewRestaurant = React.createClass({
  getInitialState(){
    return {name:"", neighborhood: "", address: "", cuisine: "", cost: 0}
  },

  handleChange(event){
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]: value});
  },

  createNew(event){
    axios.post('/api/restaurants', this.state)
      .then( () => {
        this.setState({name:"", neighborhood: "", address: "", cuisine: "", cost: 0})
      })
  },

  render: function() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.createNew}>
          <input onChange={this.handleChange} name="name" type="text" value={this.state.name} placeholder="Name"/>
          <input onChange={this.handleChange} name="neighborhood" type="text" value={this.state.neighborhood} placeholder="Neighborhood"/>
          <input onChange={this.handleChange} name="address" type="text" value={this.state.address} placeholder="Address"/>
          <input onChange={this.handleChange} name="cuisine" type="text" value={this.state.cuisine} placeholder="Cuisine"/>
          <select onChange={this.handleChange} name="cost">
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


export default NewRestaurant;
