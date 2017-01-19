var React = require('react')
var $ = require('jquery')
var Review = require('./review.jsx')

///////
// Single Restaurant
// fetches information on a single restaurant with all associated reviews
// displays all restaurant information along with all the reviews for that restaurant
// renders a form that allows you to write a new review for that restaurant
///////


let Restaurant = React.createClass({
  getInitialState: function() {
    return ({restaurant: null})
  },
    componentDidMount(){
    $.ajax({
      url: '/api/restaurants/' + this.props.params.id,
      type: "Get"
    }).done((data)=>{
      this.setState({restaurant: data})
    })
  },
  render: function() {
    console.log('this.state.restaurant=====>',this.state.restaurant)
    let stars = ""
    let reviews = []
    if (this.state.restaurant) {
      return (
        <div>
          <h1>{this.state.restaurant.name}</h1>
          <h2>cuisine:</h2>
          <p>{this.state.restaurant.cuisine}</p>
          <h2>neighborhood:</h2>
          <p>{this.state.restaurant.neighborhood}</p>
          <h2>address:</h2>
          <p>{this.state.restaurant.address}</p>
          <ul>
            <h2>Reviews:</h2>
            {
              this.state.restaurant.Reviews.map((ele, idx)=> <li key={idx}>{'date: '+ ele.date + ' Comment: '+ ele.description + ' stars: ' + ele.rating}</li>)
            }
           
          </ul>
          <Review />

        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }

})

module.exports = Restaurant





// <table>
//            <tr>
//               <th>date</th>
//               <th>Review</th>
//               <th>stars</th>
//             </tr>
//            <tr>
//            {
//               this.state.restaurant.Reviews.map((ele, idx)=>
//               <td key={idx}>{ele.date}</td>
//               <td key={idx}>Ma</td>
//               <td key={idx}>Germany</td>)
//             } 
//             </tr>
//           </table>
