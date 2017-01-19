var React = require('react')
var $ = require('jquery')
var NewRestaurantForm = require('./newrestaurant.jsx')
import {Link} from 'react-router'

let Restaurants = React.createClass({
  getInitialState: function() {
    return({
      restaurants: null,
      name: "",
      address: "",
      cost: "1",
      cuisine: "",
      neighborhood: ""
    })
  },
  componentDidMount(){
    this.getInfo()
  },
  getInfo(){
    $.ajax({
      url: '/api/restaurants',
      type: 'GET'
    })
    .done(restaurants =>{
      this.setState({
        restaurants
      })
    })
  },
  handleform(event){
    this.setState({[event.target.name]: event.target.value})
  },
  submitform(event){
    event.preventDefault()
    const {name, address, cuisine, cost, neighborhood} = this.state
    $.ajax({
      url: '/api/restaurants',
      type: 'POST',
      data: {
        name,
        address, 
        cuisine, 
        cost, 
        neighborhood
      }
    })
    .done(restaurants =>{
      this.getInfo()
    })

  },
  render: function() {
    return (
      <div>
        <ol>      
          {this.state.restaurants && this.state.restaurants.map((restaurant,index) => (
            <Link key={index} to={"/restaurants/" + restaurant.id}><li>{restaurant.name}</li></Link>
          ))}
        </ol>
        <div>
          <form onSubmit={this.submitform}>
            <input onChange={this.handleform} type="text" name="name" value={this.state.name} placeholder="Name"/>
            <input onChange={this.handleform} type="text" name="neighborhood"placeholder="Neighborhood"/>
            <input onChange={this.handleform} type="text" name="address"placeholder="Address"/>
            <input onChange={this.handleform} type="text" name="cuisine"placeholder="Cuisine"/>
            <select onChange={this.handleform} name="cost">
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
            </select>
            <input type="submit" value="Add New Restaurant" />
          </form>
        </div>
      </div>
    )
  }
})

module.exports = Restaurants
