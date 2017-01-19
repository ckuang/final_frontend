var React = require('react')
	, ReactDOM = require('react-dom')
	, $ = require('jquery')
	, Link = require('react-router')

const Restaurants = React.createClass({
	getInitialState(){
		return {
			restaurants: null, name: '', neighborhood: '', cuisine: '', address: '', cost: null
		}
	},
	componentDidMount(){
		$.ajax({
			url: '/api/restaurants',
			type: 'GET',
		})
		.done(restaurants => this.setState({restaurants: restaurants}))
	},
	inputChange(eventType, event){
		event.preventDefault();
		this.setState({[eventType]: event.target.value})
	},
	submitInfo(){
		event.preventDefault();
		$.ajax({
			url: '/api/restaurants',
			type: 'POST',
			data: {
				name: this.state.name,
				neighborhood: this.state.neighborhood,
				cuisine: this.state.cuisine,
				address: this.state.address,
				cost: this.state.cost
			}
		})
		.done(response => console.log("Submitted:", response))
	},
	redirect(id){
		this.props.router.push('/restaurant/'+id)
	},
	render(){
		console.log("Rendering this.state: ", this.state)
		return(
			<div>
				<ol>
					<p>Restaurants:</p>
					{this.state.restaurants ? 
						this.state.restaurants.map((restaurant, index)=>
						<li key={index} onClick={this.redirect.bind(this, restaurant.id)}>{restaurant.name}</li>) :
						 <p>no restaurant found</p>
					}
				</ol>
				<form onSubmit={this.submitInfo}>
					<p>Add a restaurant:</p>
					<input type='text' placeholder='name' onChange={this.inputChange.bind(this, 'name')} value={this.state.name}/>
					<br/>
					<input type='text' placeholder='neighborhood' onChange={this.inputChange.bind(this, 'neighborhood')} value={this.state.neighborhood}/>
					<br/>
					<input type='text' placeholder='cuisine' onChange={this.inputChange.bind(this, 'cuisine')} value={this.state.cuisine}/>
					<br/>
					<input type='text' placeholder='address' onChange={this.inputChange.bind(this, 'address')} value={this.state.address}/>
					<br/>
					<input type='text' placeholder='cost' onChange={this.inputChange.bind(this, 'cost')} value={this.state.cost}/>
					<br/>

					<input type='submit' value='Submit'/>
				</form>
			</div>
		)
	}
})

export default Restaurants