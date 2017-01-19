var React = require('react')
var $ = require('jquery')
var Review = require('./review.jsx')

let Restaurant = React.createClass({
  getInitialState: function() {
    return ({restaurant: null})
  },


  componentWillMount() {
    console.log('hey here')
    $.ajax({
      type: 'GET',
      url: '/api/restaurants/' + this.props.params.restaurantId
    })
    .done((data) => {
      console.log(data)
      this.setState({
        restaurant: data
      })
      console.log(data)
      // var final = data.map(function(a,b){
      //   return a.name
      // })
      console.log(Object.values(data))
      // this.setState({restaurants: final})
      // console.log(this.state.restaurants)
      // console.log(data)
      // if(data) {
      //   console.log(data + ' is logged in!');
      //   this.setState({data: data});
      // } else {
      //   console.log('No on is logged in');
      // }
    })
  },

  render: function() {
    let stars = ""
    let reviews = []
    // if (this.state.restaurant) {
      return (
        <div>
        <Review restaurantId = {this.state.id} />
          <button> rest</button>
        </div>
      )
    // } else {
    //   return (
    //     <div>Loading...</div>
    //   )
    // }
  }
})

module.exports = Restaurant
