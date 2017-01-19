var React = require('react')
var $ = require('jquery')

var Review = React.createClass({
  getInitialState: function (){
    return {
      rating: null,
      date: null,
      description: null,
      id: this.props.restaurantId

    }
  },

  handleChange(key,event){
    var text = event.target.value
    this.setState({ [key]:text })
    console.log(this.state)
  },
  handleChangeDate(event){

      var text = event.target.value
      // console.log(text)
      this.setState({ date:text })
      console.log(this.state.date)
    },

  createReview(event){
    event.preventDefault()
      let data ={
        rating:this.state.rating,
        date: this.state.date,
        description: this.state.description
       
      }
      console.log(data)
    $.ajax({
      url:'/api/review',
      type: "POST",
      data:data,
      success: function(data){
        // console.log(this.state)
        console.log(data)
      // this.print(data)

      }.bind(this)

    })
   
    },

  handleOption(event){
    event.preventDefault()
    var text = event.target.value
    console.log(text)
    this.setState({rating:text })
    console.log(this.state)
    // console.log(text)
  },
  render: function() {
    return (
      <div>
        <form>
          <input onChange ={this.handleChangeDate} type="date"/> <br/>
          <textarea onChange ={this.handleChange.bind(this,"description")} type="text" placeholder="Describe your experience"/> <br/>
          <select onChange = {this.handleOption}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select><br/>
          <input type="submit"  onClick = {this.createReview} value="Submit Review" />
        </form>
      </div>
    )
  }
});

module.exports = Review
