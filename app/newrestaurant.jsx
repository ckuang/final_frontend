var React = require('react')
var $ = require('jquery')

var NewRestaurant = React.createClass({
  getInitialState: function (){
    return({
      Name: null,
      Neighborhood: null,
      Address: null,
      Cuisine: null,
      Cost: null
    })
  },

  listenToFormChange(event){
    var field = event.target.placeholder;
    if(field === "Name"){
      this.setState({Name: event.target.value});
    }
    else if(field === "Neighborhood"){
      this.setState({Neighborhood: event.target.value});
    }
    else if(field === "Address"){
      this.setState({Address: event.target.value});
    }
    else if(field === "Cuisine"){
      this.setState({Cuisine: event.target.value});
    }
    //console.log(this.state);
  },

  saveCost(event){
    //console.log(event.target);
    this.setState({Cost: event.target.value});
    //console.log(this.state);
  },

  makeANewRestaruant(event){
    //event.preventDefault();
    $.ajax({
      url:'/api/restaurants',
      type: "POST",
      data: this.state
    })
    .done((data) => {
      console.log(data);
    })
  },


  render: function() {
    return (
      <div>
        <form onChange={this.listenToFormChange} onSubmit={this.makeANewRestaruant}>
          <input type="text" value={this.state.name} placeholder="Name"/>
          <input type="text" placeholder="Neighborhood"/>
          <input type="text" placeholder="Address"/>
          <input type="text" placeholder="Cuisine"/>
          <select onClick={this.saveCost}>
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
