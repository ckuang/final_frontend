var React = require('react');
var $ = require('jquery');
import {browserHistory} from 'react-router';

var Review = React.createClass({
  getInitialState: function (){
    return {
      description:'',rating:'1',date: ''
    }
  },
  submitReview() {
    $.ajax({
      url: '/api/review',
      type: 'POST',
      data: {
        rating: this.state.rating,
        date: this.state.date,
        description: this.state.description,
        RestaurantId: this.props.id
      }
    }).then(()=>{browserHistory.push('/'+this.props.id)})
  },
  handleChange(name,event) {
    event.preventDefault()
    var change = {};
    change[name] = event.target.value;
    this.setState(change);
    console.log(this.state)
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.submitReview}>
          <input onChange={this.handleChange.bind(this,'date')} type="date"/> <br/>
          <textarea value={this.state.description} onChange={this.handleChange.bind(this,'description')} type="text" placeholder="Describe your experience"/> <br/>
          <select value={this.state.rating} onChange={this.handleChange.bind(this,'rating')}>
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
