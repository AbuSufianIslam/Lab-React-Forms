import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state);
		this.setState({
			username: '',
			password: ''
		});
	}

	render() {
		return (
			<div id="container">
				<div id="navbar">Form.js</div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="username">Username:</label>
					<input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
					<label htmlFor="password">Password:</label>
					<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<Form />, document.getElementById('app'));
