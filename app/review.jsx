var React = require('react')
var $ = require('jquery')

var NewReview = React.createClass({
  getInitialState: function (){
    return {
      date: '',
      description: '',
      rating: '',
      RestaurantId: this.props.id
    }
  },

// e = event
  handleDate:function(e){
    this.setState({date: e.target.value})
    console.log("THIS HANDLES DATE", e.target.value)
  },

  // this takes the targeted value of rating. It gets the info for what is needed for rating
  handleRating:function(e){
    this.setState({rating: e.target.value})
    console.log("THIS HANDLES RATING", e.target.value)
  },

//handle change on description
  handleDescription: function(e){
    this.setState({description: e.target.value});
    console.log("THIS HANDLES DESCRIPTION", e.target.value)
    // make a review object, and push it into the reviews array
    // also make sure you render the reviews array to the page (using mapping)
    // console.log("THIS IS THE CURRENT STATE ===>", this.state)
    // console.log("This is changing");
  },

//this holds data and prevents it from disappearing
  handleSubmit:function(e){
    e.preventDefault();

    $.ajax({
      type: "POST",
      url: "/api/review/",
      data: this.state,
      success: function(){
        console.log("This is successful")
      }
    })
    // console.log("THIS IS WHAT HANDLESUBMIT E IS ===>", e.target)
    // console.log("clicked")
  },
  render: function() {
    // console.log("THESE ARE THE REVIEWS===>", this.props.reviews, this.props.id)
    //when using select tags, they need to be associated with the form in order for it to submit.
    //need handleDate function
    //need handleChange
    //handleSubmit == onSubmit
    return (
      <div>
        <form id="review" onSubmit={this.handleSubmit}>
          <input type="date" onChange={this.handleDate}/> <br/>
          <textarea type="text" placeholder="Describe your experience" onChange={this.handleDescription} /> <br/>
          <select form="review" onChange={this.handleRating}>
            <option value="0"></option>
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

module.exports = NewReview
