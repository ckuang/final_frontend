var React = require('react')
var $ = require('jquery')
var Link = require('react-router')

var NewRestaurant = React.createClass({
  getInitialState: function (){
    return({name: '', neighborhood: '', address: '', cuisine: '', cost: ''})
  },
  inputChange(eventType, event){
    event.preventDefault();
    this.setState({[eventType]: event.target.value})
  },
  submitInfo(){
    event.preventDefault();
    $.ajax({
      url: '/api/restaurants',
      type: 'POST',
      data: {
        name: this.state.name,
        neighborhood: this.state.neighborhood,
        address: this.state.address,
        cuisine: this.state.cuisine,
        cost: this.state.cost
      }
    })
    .done(response => console.log(response))
  },
  redirect(id){
    this.props.router.push(id)
  },
  render: function() {
    return (
      <div>
        <form>
          <input type="text" value={this.state.name} placeholder="Name" onChange={this.inputChange.bind(this, 'name')} value={this.state.name}/>
          <input type="text" placeholder="Neighborhood" onChange={this.inputChange.bind(this, 'neighborhood')} value={this.state.neighborhood}/>
          <input type="text" placeholder="Address" onChange={this.inputChange.bind(this, 'address')} value={this.state.address}/>
          <input type="text" placeholder="Cuisine" onChange={this.inputChange.bind(this, 'cuisine')} value={this.state.cuisine}/>
          <select onChange={this.inputChange.bind(this, 'cost')} value={this.state.cost}>
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
