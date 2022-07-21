import React, { Component } from 'react';
import UserService from '../utils/UserService';

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.userService = new UserService();

		this.state = {
			username: '',
			password: '',
		};

		this.form = React.createRef();
	}

	componentDidMount = () => {
		this.redirectIfLogin();
	};

	redirectIfLogin = async () => {
		const userService = this.userService;

		try {
			await userService.getUserFromServer();
			userService.redirectIfUserLogin('/user/');
		} catch (error) {
			this.showError(error);
		}
	};

	fetchData = async () => {
		const userService = this.userService;
		try {
			await userService.logIn(this.state.username, this.state.password);
			userService.redirectIfUserLogin('/user/');
		} catch (error) {
			this.showError(error);
		}
	};

	login = (e) => {
		this.fetchData();
		e.preventDefault();
	};

	showError = (error) => {
		this.setState({ error: error });
	};

	inputHandler = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render = () => {
		return (
			<div>
				<form ref={this.form}>
					<h1>Log In</h1>
					<p>
						<input
							type="text"
							name="username"
							value={this.state.username}
							onChange={this.inputHandler}
						/>
					</p>
					<p>
						<input
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.inputHandler}
						/>
					</p>
					{this.state.error ? (
						<p style={{ color: 'red' }}>Error: {this.state.error.message}</p>
					) : null}
					<button type="submit" onClick={this.login}>
						Login
					</button>
				</form>
			</div>
		);
	};
}

export default LoginPage;
