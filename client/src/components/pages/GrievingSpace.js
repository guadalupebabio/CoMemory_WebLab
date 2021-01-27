import React, { Component } from 'react';
import WhiteButton from '../modules/WhiteButton';
import NavBar from '../modules/NavBar';
import Board from '../modules/Board';

import '../../utilities.css';
import './GrievingSpace.css';
import { get } from '../../utilities.js';

/**
 * 
 * Proptypes
 * @param {string} userId
 * @param {function} handleLogin
 * @param {function} handleLogout
 * 
 */

class GrievingSpace extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			flowers: [],
			boards: []
		};
	}

	componentDidMount() {
		document.title = 'The Grieving Space';
		get('/api/allboards').then((boardObjs) => {
			console.log('got list of boards');
			boardObjs.map((boardObj) => {
				this.setState({ boards: this.state.boards.concat([ boardObj ]) });
			});
		});
		get('/api/getImages').then((flowers) => {
			console.log('got flowers');
			this.setState({
				flowers
			});
		});
	}

	render() {
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
			// boardList = [
			// 	<div className="Board-styles">Create a memory.</div>,
			// 	<WhiteButton text="New" linkDestination="/contributestep1" />
			// ];
		}
		return (
            <div id="GS-container">
                <NavBar
					userId={this.props.userId}
					handleLogin={this.props.handleLogin}
					handleLogout={this.props.handleLogout}
				/>
                <div id="GS-contentContainer">
                <h1 id="GS-title">The Grieving Space</h1>
				<p className="upperleft">A mosaic to commemorate loved ones, together.</p>
				<div id="GrievingSpace-boardContainer">
                    {boardList}
                </div>
				{this.state.flowers.length === 0 ? (
					<p className="middle">Contribute a memory</p>
				) : (
					this.state.flowers.map((flower) => <img src={flower} />)
				)}
			</div>
            </div>

			// <div className="gscontainer">
			//     <p className="upperleft">A virtual space to honor and grieve  loved ones</p>
			//     <div className="upperright">

			//     {this.state.isLoggedIn ? (
			//         <WhiteButton text="New" linkDestination="/contributestep1" />
			//       ):(
			//         <WhiteButton text="New" linkDestination="/login" />
			//       )}
			//     </div>
			//     <p id="footer">Hover over image to visualize text</p>
			// </div>
		);
	}
}

export default GrievingSpace;
