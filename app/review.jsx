// IMPORT EVERYTHING
var React = require('react')
var $ = require('jquery')

// THE RESTAURANT REVIEW COMPONENT
var Review = React.createClass({

  // GET THE INITIAL STATE
  getInitialState(){ 
    return ( {date: "", description: "", rating: 1} )
  },

  // HANDLE CHANGE 
  handleChange (type, event) {
    this.setState( {[type]: event.target.value} )
  },

  // SUBMIT A REVIEW FUNCTION
  submitAReview (e) {

    // HOLD THE STATE
    var revEntry = this.state;

    // AJAX CALL TO POST A REVIEW
    $.ajax({
      url: '/api/review',
      type: 'POST',
      data: {
        date: revEntry.date,
        description: revEntry.description,
        rating: revEntry.rating,
        id: this.props.id
      }
    })

    // UPON SUCCESS
    .done( (response) => console.log(response.message) )
  },

  // THE RENDER FUNCTION
  render() {
    console.log(this.state)
    return (
      <div>
      <hr />
      <h3>Write a New Review</h3>
        <form>
          <input type="date" onChange={this.handleChange.bind(this, 'date')}/> 
          <br/>
          <br/>
          <textarea type="text" onChange={this.handleChange.bind(this, 'description')} placeholder="Describe your experience"/> 
          <br/>
          <br/>
          <select onChange={this.handleChange.bind(this, 'rating')}>
            <option value="1">*</option>
            <option value="2">**</option>
            <option value="3">***</option>
            <option value="4">****</option>
            <option value="5">*****</option>
          </select>
          <br/>
          <br/>
          <input type="submit" value="Submit Review" onClick={this.submitAReview}/>
        </form>
      </div>
    )
  }
});

module.exports = Review