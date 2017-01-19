var React = require('react')
var $ = require('jquery')

var Review = React.createClass({
  getInitialState: function (){
    return {date: "", rating: "1", description: "", RestaurantId: this.props.idProp}
  },
  handleChange(e){
    console.log(e.target.name)
     if(e.target.name === 'date'){
      this.setState({date: e.target.value})
    } else if (e.target.name === 'rating'){
      this.setState({rating: e.target.value})
    } else if (e.target.name === 'description'){
      this.setState({description: e.target.value})
    } 
  },
  handleReview(e){
    e.preventDefault()
    $.ajax({
      url: '/api/review/',
      type: 'POST',
      data: this.state,
      success: ((data)=>{
        console.log(data)
      })
    })
  },
  render: function() {
     this.state ? console.log('STATE:', this.state) : null
    return (
      <div>
        <form>
          <input name="date" onChange={this.handleChange} type="date"/> 
          <br/>
          <br/>
          <textarea name="description" onChange={this.handleChange} type="text" placeholder="Describe your experience"/> 
          <br/>
          <br/>
          <select onChange={this.handleChange} name="rating">
            <option value="1">*</option>
            <option value="2">**</option>
            <option value="3">***</option>
            <option value="4">****</option>
            <option value="5">*****</option>
          </select>
          <br/>
          <br/>
          <input type="submit" value="Submit Review" onClick={this.handleReview} />
        </form>
      </div>
    )
  }
});

module.exports = Review
