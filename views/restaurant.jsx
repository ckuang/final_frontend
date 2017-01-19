var React = require('react')
	, ReactDOM = require('react-dom')
	, $ = require('jquery')

const Restaurant = React.createClass({
	getInitialState(){
		return {
			restaurant: null, rating: null, description: '', date: null
		}
	},
	componentDidMount(){
		$.ajax({
			url: '/api/restaurants/'+ this.props.params.id,
			type: 'GET',
		})
		.done(restaurant => this.setState({restaurant: restaurant}))
	},
	inputChange(eventType, event){
		event.preventDefault();
		this.setState({[eventType]: event.target.value})
	},
	submitInfo(){
		event.preventDefault();
		$.ajax({
			url: '/api/review/',
			type: 'POST',
			data: {
				rating: this.state.rating,
				description: this.state.description,
				date: this.state.date,
				id: this.props.params.id
			}
		})
		.done(response => console.log("Submitted:", response))
	},
	render(){
		console.log("Rendering this.state: ", this.state)
		console.log("Rendering this.state.restaurant: ", this.state.restaurant)
		return(
			<div>
				<p>RESTAURANT INFO:</p>
				{this.state.restaurant ? 
					<div>
						<p>rating: {this.state.restaurant.rating}</p>
						<p>description: {this.state.restaurant.description}</p>
						<p>date: {this.state.restaurant.date}</p>
					</div> :
					<p>no restaurant found</p>
				}
				<ol>
					<p>Reviews:</p>
					{this.state.restaurant ? 
						this.state.restaurant.Reviews.map((review, index)=>
							<li key={index}>
								<br/>
								Name: {review.rating}
								<br/>
								description: {review.description} 
								<br/>
								date: {review.date}
							</li>
						) :
						 <p>no review found</p>
					}
				</ol>
				<form onSubmit={this.submitInfo}>
					<p>Write a review:</p>
					<input type='text' placeholder='rating' onChange={this.inputChange.bind(this, 'rating')} value={this.state.rating}/>
					<br/>
					<input type='text' placeholder='description' onChange={this.inputChange.bind(this, 'description')} value={this.state.description}/>
					<br/>
					<input type='text' placeholder='date' onChange={this.inputChange.bind(this, 'date')} value={this.state.date}/>
					<br/>
					<input type='submit' value='Submit'/>
				</form>
			</div>
		)
	}
})

export default Restaurant