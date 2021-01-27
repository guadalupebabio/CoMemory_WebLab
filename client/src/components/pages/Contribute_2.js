import React, { Component } from 'react';
import WhiteButton from '../modules/WhiteButton.js';
import DownloadButton from '../modules/DownloadButton.js';
import P5Wrapper, {CLOSE} from 'react-p5-wrapper';
import sketch from '../modules/sketch';
import Board from '../modules/Board';

import '../../utilities.css';
import './Contribute_2.css';
import '../modules/Board.css';

import { get } from '../../utilities';

/**
 * 
 * Proptypes
 * @param {string} userId
 * @param {string} recentBoardId the id of the most recently uploaded board
 * @param {function} updateBoard updates which board has been uploaded most recently
 * 
 */

class Contribute_2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			board_id: '',
			boards: []
		};
	}

	componentDidMount() {
		document.title = 'Your Memory';
		get('/api/whoami').then((user) => {
			if (user.name) {
				// they are registed in the database, and currently logged in.
				this.setState({ username: user.name });
			}
		});

		get('/api/boards').then((boardObjs) => {
			console.log('got list of boards');
			boardObjs.map((boardObj) => {
				this.setState({
					boards: this.state.boards.concat([ boardObj ]),
					board_id: boardObj._id,
				});
			});
		});
	}

	render() {
		// console.log(CLOSE);
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
			} else {
				boardList = <div className="Board-styles">Create a memory</div>;
			}
			const state = { rotation: 160 };
			return (
				<div className="flowercontainer">
					{boardList[boardList.length - 1]}
					<div className="cont2flower">
						<P5Wrapper
							sketch={(p) => {
								return sketch(p, this.state.board_id);
							}}
							shape={this.state.shape}
						/>
					</div>
					{/* <input type="range" defaultValue={state.shape} min="0" max="360" step="1" onChange={event => setState({ ...state, shape: event.target.value })}/> */}

					<div className="cont2buttons">
						<a href="/contributestep1">back</a>
						<DownloadButton text="Download" linkDestination="/" />
						<WhiteButton text="Submit" linkDestination="/personalspace" />
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

export default Contribute_2;
