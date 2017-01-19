var React = require('react')
var $ = require('jquery')

var Review = React.createClass({
  getInitialState: function (){
    return {
      date: "",
      description: "",
      rating: ""
    }
  },
  handleSubmit(event){
    event.preventDefault()
    const {date, description, rating} = this.state
    $.ajax({
      url: '/api/review',
      type: 'POST',
      data: {
        date,
        description,
        rating,
        RestaurantId: this.props.restaurantId
      }
    })
    .done(review => {
      console.log("reviee", review)
    })
  },
  handledate(event){
    this.setState({date: event.target.value})
  },
  handledes(event){
    this.setState({description: event.target.value})
  },
  handlerate(event){
    this.setState({rating: event.target.value})
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Write A Review</h1>
          <input type="date" onChange={this.handledate}/> <br/>
          <textarea onChange={this.handledes} type="text" placeholder="Describe your experience"/> <br/>
          <select onChange={this.handlerate}>
            <option value="1">*</option>
            <option value="2">**</option>
            <option value="3">***</option>
            <option value="4">****</option>
            <option value="5">*****</option>
          </select><br/>
          <input type="submit" value="Submit Review" />
        </form>
      </div>
    )
  }
});

module.exports = Review
