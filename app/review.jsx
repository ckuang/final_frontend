var React = require('react')
var $ = require('jquery')

var Review = React.createClass({
  getInitialState: function (){
    return {

    }
  },
  render: function() {
    return (
      <div>
        <form>
          <input type="date"/> <br/>
          <textarea type="text" placeholder="Describe your experience"/> <br/>
          <select>
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
