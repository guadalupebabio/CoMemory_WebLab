import React, { Component } from 'react';
import WhiteButton from '../modules/WhiteButton.js';
import Board from '../modules/Board';
import NavBar from '../modules/NavBar';

import '../../utilities.css';
import './PersonalSpace.css';
import '../modules/Board.css';

import { get, post } from '../../utilities';

/**
 * 
 * Proptypes
 * @param userId
 * @param {function} handleLogin
 * @param {function} handleLogout
 * 
 */

class PersonalSpace extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			boards: []
		};
	}

	componentDidMount() {
		document.title = 'My Memories';

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
					<h1 id="header">My Memories</h1>
                    <NavBar userId={this.props.userId} handleLogin={this.props.handleLogin} handleLogout={this.props.handleLogout} />
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
    

    // render() {

    //     return (
    //         <div className="pscontainer">
    //             <div className="upperleft"><h2>Hi, {this.state.username}</h2></div>
                
    //             <div class="upperright">
                
    //               <WhiteButton text="New" linkDestination="/contributestep1" /> <a href="/login">Log out</a> 
                  
    //             </div> 
                
    //             <div id="personalfooter">
    //             <WhiteButton text="EXPLORE THE GRIEVING SPACE" linkDestination="/grievingspace" />
    //             </div>
                
    //         </div>
    //     )
    // }
}

export default PersonalSpace;
