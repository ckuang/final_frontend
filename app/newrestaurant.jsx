var React = require('react')
var $ = require('jquery')

var NewRestaurant = React.createClass({
  getInitialState: function (){
   return {
      name:'',
      neighborhood: "",
      address: '',
      cuisine: '',
      cost: null
   } 
  },

  handleChange(key,event){
    var data = event.target.value
      // console.log(data)
      this.setState({[key]:data})
      // console.log(this.state)
  },
  handleSelect(event){
    var data = event.target.value
      // console.log(data)
      this.setState({cost:data})
      console.log(this.state)
  },
  createRestaurant(event){
    event.preventDefault()
      let data ={
        name:this.state.name,
        neighborhood: this.state.neighborhood,
        address: this.state.address,
        cuisine: this.state.cuisine,
        cost: parseInt(this.state.cost)
      }
      console.log(data)
    $.ajax({
      url:'/api/restaurants',
      type: "POST",
      data:data,
      success: function(data){
        // console.log(this.state)
        console.log(data)
      // this.print(data)

      }.bind(this)

    })


  },
  render: function() {
    return (
      <div>
        <form onSubmit = {this.createRestaurant}>
          <input type="text" onChange ={this.handleChange.bind(this, "name")} value={this.state.name} placeholder="Name"/>
          <input type="text" onChange ={this.handleChange.bind(this,"neighborhood")} placeholder="Neighborhood"/>
          <input type="text" onChange ={this.handleChange.bind(this, "address")} placeholder="Address"/>
          <input type="text" onChange ={this.handleChange.bind(this, "cuisine")} placeholder="Cuisine"/>
          <select onChange = {this.handleSelect}>
            <option value="1">$20</option>
            <option value="2">$30</option>
            <option value="3">$40</option>
            <option value="4">$50</option>
          </select>
          <input type="submit" value="Add New Restaurant" />
        </form>
      </div>
    )
  }
});


module.exports = NewRestaurant
