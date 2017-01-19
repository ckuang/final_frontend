var React = require('react')
var $ = require('jquery')

var Review = React.createClass({
  getInitialState: function (){
      return ({rating: null, date: null, description: null, RestaurantId: this.props.id})
  },
  handleSubmit() {
    let data = this.state
    $.ajax({
      url: '/api/review',
      method: 'POST',
      data: data
    })
  },
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state)
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="date" type="date"/> <br/>
          <textarea onChange={this.handleChange} name="description" type="text" placeholder="Describe your experience"/> <br/>
          <select onChange={this.handleChange} name="rating">
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
