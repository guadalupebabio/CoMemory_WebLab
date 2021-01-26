import React, { Component } from "react";
import WhiteButton from "../modules/WhiteButton.js";
import DownloadButton from "../modules/DownloadButton.js";
import P5Wrapper from "react-p5-wrapper";
import ReactDOM from 'react-dom';
import sketch from '../modules/sketch';
import Board from '../modules/Board';

import "../../utilities.css";
import "./Contribute_2.css";

import { get, post } from "../../utilities";

/**
 * 
 * @props {String} userId
 * 
 */

class Contribute_2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            boards: [],
        }
    }
    
    componentDidMount() {
        get("/api/whoami").then((user) => {
            if (user.name) {
                // they are registed in the database, and currently logged in.
                this.setState({ username: user.name});
            }
        });

        get("/api/boards", {userId: this.props.userId}).then((boardObjs) => {
            console.log("got list of boards");
            boardObjs.map((boardObj) => {
                this.setState({ boards: this.state.boards.concat([boardObj])});
            })
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
    } else {
      boardList = <div>Create a memory</div>;
    }
        const state ={rotation: 160};
        return (
            
            <div className="flowercontainer">
                <div class="cont2flower"><P5Wrapper sketch={sketch} shape={state.shape} /></div>
                {/* <input type="range" defaultValue={state.shape} min="0" max="360" step="1" onChange={event => setState({ ...state, shape: event.target.value })}/> */}

                <div class="cont2buttons">
                <a href="/contributestep1">back</a> 
                <DownloadButton text="Download" linkDestination="/" />
                <WhiteButton text="Submit" linkDestination="/personalspace" />
                </div>

            </div>
        )
    }
}

export default Contribute_2;