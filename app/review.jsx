var React = require('react')
var $ = require('jquery')

var NewReview = React.createClass({
  getInitialState: function (){
    return {

    }
  },
  render: function() {

    //when using select tags, they need to be associted with the form in order for it to submit.
    //need handleDate function
    //ned handleChange
    //handleSubmit == onSubmit
    return (
      <div>
        <form id="review">
          <input type="date"/> <br/>
          <textarea type="text" placeholder="Describe your experience"/> <br/>
          <select form="review">
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
