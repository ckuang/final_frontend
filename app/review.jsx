var React = require('react')
var $ = require('jquery')

var Review = React.createClass({
  getInitialState: function (){
    return {
      Date:null,
      Description:null,
      Rating:null
    }
  },

  listenToFormChange(event){
    var field = event.target.placeholder;
    var type = event.target.type;
    console.log(field);
    if(type === "date"){
      this.setState({Date: event.target.value});
    }
    else if(field === "Describe your experience"){
      this.setState({Description: event.target.value});
    }
  },

  saveRating(event){
    //console.log(event.target);
    this.setState({Rating: event.target.value});
    //console.log(this.state);
  },

  addNewReview(event){
    var id = window.location.pathname;
  $.ajax({
    url:'/api/review' + id,
    type: "POST",
    data: this.state
  })
  .done((data) => {
    console.log(data);
  })
},

  render: function() {
    return (
      <div>
        <form onChange={this.listenToFormChange} onSubmit={this.addNewReview}>
          <input type="date"/> <br/>
          <textarea type="text" placeholder="Describe your experience"/> <br/>
          <select onClick={this.saveRating}>
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
