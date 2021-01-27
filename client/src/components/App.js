import React, { Component } from 'react';
import { navigate, Router } from '@reach/router';
import NotFound from './pages/NotFound.js';
import Home from './pages/Home.js';
import Registration from './pages/Registration.js';
import LogIn from './pages/LogIn.js';
import GrievingSpace from './pages/GrievingSpace.js';
import Contribute_1 from './pages/Contribute_1.js';
import Contribute_2 from './pages/Contribute_2.js';
import PersonalSpace from './pages/PersonalSpace.js';

import '../utilities.css';

import { socket } from '../client-socket.js';

import { get, post } from '../utilities';

/**
 * Define the "App" component as a class.
 */
class App extends Component {
	// makes props available in this component
	constructor(props) {
		super(props);
		this.state = {
			userId: undefined,
			recentBoardId: ''
		};
	}

	componentDidMount() {
		get('/api/whoami').then((user) => {
			if (user._id) {
				// they are registed in the database, and currently logged in.
				this.setState({ userId: user._id });
			}
		});
	}

	handleLogin = (res) => {
		console.log(`Logged in as ${res.profileObj.name}`);
		const userToken = res.tokenObj.id_token;
		post('/api/login', { token: userToken }).then((user) => {
			this.setState({ userId: user._id });
			post('/api/initsocket', { socketid: socket.id }).then(() => {
				navigate('/personalspace');
			});
		});
	};

	handleLogout = () => {
		this.setState({ userId: undefined });
		post('/api/logout').then(() => {
			navigate('/');
		});
	};

	updateBoard = (id) => {
		this.setState({
			recentBoardId: id
		});
	};

	render() {
		return (
			<>
				<Router>
					<Home path="/" userId={this.state.userId} />
					<Registration
						path="/register"
						handleLogin={this.handleLogin}
						handleLogout={this.handleLogout}
						userId={this.state.userId}
					/>
					<LogIn path="/login" userId={this.state.userId} />
					<GrievingSpace
						path="/grievingspace"
						handleLogin={this.handleLogin}
						handleLogout={this.handleLogout}
						userId={this.state.userId}
					/>
					<Contribute_1
						path="/contributestep1"
						userId={this.state.userId}
						updateBoard={this.state.updateBoard}
					/>
					<Contribute_2
						path="/contributestep2"
						userId={this.state.userId}
						recentBoardId={this.state.recentBoardId}
						updateBoard={this.state.updateBoard}
					/>
					<PersonalSpace
            path="/personalspace"
            handleLogin={this.handleLogin}
						handleLogout={this.handleLogout}
            userId={this.state.userId}
            />

					<NotFound default />
				</Router>
			</>
		);
	}
}

export default App;
