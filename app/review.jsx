import React from 'react';
import axios from 'axios';

const Review = React.createClass({
  getInitialState: function (){
    return {date: null, description: "", rating:0, RestaurantId: this.props.id}
  },

  handleChange(event){
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]: value})
  },

  newReview(event){
    axios.post('/api/review', this.state)
      .then( (res) => {
        this.setState({date: null, description: "", rating:0});
      })
      .catch( (err) => {
        console.log(err);
        alert("Something went wrong while traying to create a new review. Please try again in a few minutes!")
      })
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.newReview}>
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

export default Review;
