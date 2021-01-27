import React, { Component } from "react";
import WhiteButton from "../modules/WhiteButton.js";
import Board from "../modules/Board";

import "../../utilities.css";
import "./PersonalSpace.css";
import "../modules/Board.css";

import { get, post } from "../../utilities";

class PersonalSpace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            boards: []
        }
    }

    componentDidMount() {
        document.title = "Your Memories";
        get("/api/whoami").then((user) => {
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
			boardList = <div className="Board-styles">Create a memory</div>;
		}

        return (
            <div>
                {boardList}
                <h1 id="header">Hi, {this.state.username}</h1>
                <div className="upperright">
                
                  <WhiteButton text="New" linkDestination="/contributestep1" /> <a href="/login">Log out</a> 
                  
                </div> 
                
                <div id="personalfooter">
                <WhiteButton text="EXPLORE THE GRIEVING SPACE" linkDestination="/grievingspace" />
                </div>
                
                
                
            </div>
        )
    }
}

export default PersonalSpace;
