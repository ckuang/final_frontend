var React = require('react')
var $ = require('jquery')

var Review = React.createClass({
  getInitialState: function (){
      // console.log(this.props.id)
    return {
      description: "",
      date: "",
      rating: "",
      RestaurantId: this.props.id
    }
  },
  handleChange: function (change, e){
    this.setState({
      [change]: e.target.value,
      RestaurantId: this.state.RestaurantId
    })
  },
  submit: function (){
    console.log(this.state)
    $.ajax({
      url: '/api/review',
      type: 'POST',
      data: this.state

    })
    console.log(this.state)
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input type="date" value={this.state.date} onChange={this.handleChange.bind(this, "date")}/> <br/>
          <textarea value={this.state.description} onChange={this.handleChange.bind(this, "description")} type="text" placeholder="Describe your experience"/> <br/>
          <select value={this.state.value} onChange={this.handleChange.bind(this, "rating")}>
            <option value="1">*</option>
            <option value="2">**</option>
            <option value="3">***</option>
            <option value="4">****</option>
            <option value="5">*****</option>
          </select><br/>
          {/* <input type="text" value={this.state.RestaurantId} onChange={this.handleChange.bind(this, "RestaurantId")}></input> */}
          <input type="submit" value="Submit Review" />
        </form>
      </div>
    )
  }
});

module.exports = Review
