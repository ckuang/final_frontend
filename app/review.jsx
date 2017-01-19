var React = require('react')
var $ = require('jquery')

var Review = React.createClass({
  getInitialState: function (){
    return {
      date: '',
      description: '',
      rating: '1'
    }
  },
  handleChange(key, event){
    this.setState({[key]: event.target.value})
  },
  handleSubmit(event){
    event.preventDefault();
    const {date, description, rating} = this.state
    $.ajax({
      url: '/api/review',
      type: 'POST',
      data: {date, description, rating}
    })
  },


  render: function() {
console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange.bind(this, 'date')}  value={this.state.date}type="date"/> <br/>
          <textarea onChange={this.handleChange.bind(this, 'description')} value={this.state.description} type="text" placeholder="Describe your experience"/> <br/>
          <select onChange={this.handleChange.bind(this, 'rating')} >
            <option value="1" default>*</option>
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
