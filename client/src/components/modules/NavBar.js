import React, { Component } from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import WhiteButton from '../modules/WhiteButton.js';

import './NavBar.css';

/**
 * 
 * Proptypes
 * @param {string} userId
 * @param {function} handleLogin
 * @param {function} handleLogout
 * 
 */

const GOOGLE_CLIENT_ID = '136526920473-t1lo12n7ojqbh3um8t84j3jdbc07i64n.apps.googleusercontent.com';

class NavBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="Nav-container">
				<WhiteButton className="Nav-button" text="New Memory" linkDestination="/contributestep1" />
				<a href="/personalspace">My Memories</a>
				<a href="/grievingspace">The Grieving Space</a>
				{/* <WhiteButton className="Nav-button" text="My Memories" linkDestination="/personalspace" /> */}
				{this.props.userId ? (
					<GoogleLogout
						clientId={GOOGLE_CLIENT_ID}
						buttonText="Logout"
						onLogoutSuccess={this.props.handleLogout}
						onFailure={(err) => console.log(err)}
					/>
				) : (
					<GoogleLogin
						clientId={GOOGLE_CLIENT_ID}
						buttonText="Log in with Google"
						onSuccess={this.props.handleLogin}
						onFailure={(err) => console.log(err)}
					/>
				)}
			</div>
		);
	}
}

export default NavBar;
