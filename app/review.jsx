var React = require('react')
var $ = require('jquery')

var Review = React.createClass({
  getInitialState: function (){
    return ({
      date:'', description:'', rating:1
    })
  },
  handleChange: function(eventType, event){
    this.setState({[eventType]: event.target.value})
  },
  submitReview: function(e){
    let entry = this.state;
    $.ajax({
      url: '/api/review',
      type: 'POST',
      data: {
        date: entry.date,
        description: entry.description,
        rating: entry.rating,
        id: this.props.id
      }
    })
    .done((response)=>console.log(response.message))
  },
  render: function() {
    console.log(this.state)
    return (
      <div>
      <h3>Write a New Review</h3>
        <form>
          <input type="date" onChange={this.handleChange.bind(this, 'date')}/> <br/>
          <textarea type="text" onChange={this.handleChange.bind(this, 'description')} placeholder="Describe your experience"/> <br/>
          <select onChange={this.handleChange.bind(this, 'rating')}>
            <option value="1">*</option>
            <option value="2">**</option>
            <option value="3">***</option>
            <option value="4">****</option>
            <option value="5">*****</option>
          </select><br/>
          <input type="submit" value="Submit Review" onClick={this.submitReview}/>
        </form>
      </div>
    )
  }
});

module.exports = Review
