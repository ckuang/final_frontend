var React = require('react')
var $ = require('jquery')

var NewRestaurant = React.createClass({
  getInitialState: function (){
    return{
      name: "",
      neighborhood:"",
      address: "",
      cuisine: "",
      cost: "1"
    }
  },
  onChange(key, e){
    this.setState({[key]: e.target.value})
  },
  onSubmit(e){
    $.ajax({
      url: '/api/restaurants',
      type: "POST",
      data: this.state
    })
  },
  render: function() {
    console.log(this.state.cost)
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} placeholder="Name" onChange={this.onChange.bind(this,'name')}/>
          <input type="text" value={this.state.neighborhood} placeholder="Neighborhood" onChange={this.onChange.bind(this,'neighborhood')}/>
          <input type="text" value={this.state.address} placeholder="Address" onChange={this.onChange.bind(this,'address')}/>
          <input type="text" value={this.state.cuisine} placeholder="Cuisine" onChange={this.onChange.bind(this,'cuisine')}/>
          <select onChange={this.onChange.bind(this,'cost')}>
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
