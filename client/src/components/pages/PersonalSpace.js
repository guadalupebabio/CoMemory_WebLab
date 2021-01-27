import React, { Component } from 'react';
import WhiteButton from '../modules/WhiteButton.js';
import Board from '../modules/Board';
import GoogleLogin, { GoogleLogout } from "react-google-login";

import '../../utilities.css';
import './PersonalSpace.css';
import '../modules/Board.css';

import { get, post } from '../../utilities';

/**
 * 
 * Proptypes
 * @param userId
 * 
 */

const GOOGLE_CLIENT_ID = "136526920473-t1lo12n7ojqbh3um8t84j3jdbc07i64n.apps.googleusercontent.com";


class PersonalSpace extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			boards: []
		};
	}

	componentDidMount() {
		document.title = 'Your Memories';
		get('/api/whoami').then((user) => {
			if (user.name) {
				// they are registed in the database, and currently logged in.
				this.setState({ username: user.name });
			}
		});

		get('/api/boards').then((boardObjs) => {
			console.log('got list of boards');
			boardObjs.map((boardObj) => {
				this.setState({ boards: this.state.boards.concat([ boardObj ]) });
			});
		});
	}

	render() {
		if (this.props.userId) {
			let boardList = null;
			const hasBoards = this.state.boards.length !== 0;
			if (hasBoards) {
				boardList = this.state.boards.map((boardObj) => (
					<Board
						key={`Board_${boardObj._id}`}
						_id={boardObj._id}
						creator_id={boardObj.creator_id}
						honoree_name={boardObj.honoree_name}
						date={boardObj.date}
						place={boardObj.place}
						msg={boardObj.msg}
					/>
				));
				boardList.reverse();
			} else {
				boardList = [
					<div className="Board-styles">Create a memory.</div>,
					<WhiteButton text="New" linkDestination="/contributestep1" />
				];
			}

			return (
				<div>
					{boardList}
					<h1 id="header">Hi, {this.state.username}</h1>
					<div className="upperright">
						<WhiteButton text="New" linkDestination="/contributestep1" />
                        <GoogleLogout
                      clientId={GOOGLE_CLIENT_ID}
                      buttonText="Logout"
                      onLogoutSuccess={this.props.handleLogout}
                      onFailure={(err) => console.log(err)}
                    />
                    {/* <a href="/login">Log out</a> */}
					</div>

					<div id="personalfooter">
						<WhiteButton text="EXPLORE THE GRIEVING SPACE" linkDestination="/grievingspace" />
					</div>
				</div>
			);
		} else {
			return (
				<div className="u-flex u-flex-justifyCenter u-flex-alignCenter">
					<div>Please log in to contribute!</div>
					<WhiteButton text="Login" linkDestination="/register" />
				</div>
			);
		}
	}
}

export default PersonalSpace;
