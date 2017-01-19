var React = require('react')
var $ = require('jquery')

var Review = React.createClass({
  getInitialState: function (){
    return {
      rating: 1,
      date: "",
      description: "",
      RestaurantId: this.props.id
    }
  },
  onChange(key,e){
    this.setState({[key]:e.target.value})
  },
  submit(e){
    $.ajax({
      url: "/api/review",
      type: "POST",
      data: this.state
    })
  },
  render: function() {
    return (
      <div>
      <h3>Write a New Review</h3>
        <form onSubmit={this.submit}>
          <input type="date" onChange={this.onChange.bind(this, "date")}value={this.state.date}/> 
          <br/>
          <textarea type="text" onChange={this.onChange.bind(this, "description")}value={this.state.description} placeholder="Describe your experience"/>
          <br/>
          <select onChange={this.onChange.bind(this, "rating")}>
            <option value="1">*</option>
            <option value="2">**</option>
            <option value="3">***</option>
            <option value="4">****</option>
            <option value="5">*****</option>
          </select>
          <br/>
          <input type="submit" value="Submit Review" />
        </form>
      </div>
    )
  }
});

module.exports = Review
