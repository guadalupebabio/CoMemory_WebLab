import React, { Component } from "react";
import WhiteButton from "../modules/WhiteButton.js";
import DownloadButton from "../modules/DownloadButton.js";
import P5Wrapper from "react-p5-wrapper";
import ReactDOM from 'react-dom';
import sketch from '../modules/sketch';

import "../../utilities.css";
import "./PersonalSpace.css";

import { get, post } from "../../utilities";

class PersonalSpace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: String,
            honoree_name: String,
            date: Date,
            place: String,
            msg: String
        }
    }

    componentDidMount() {
        get("/api/whoami").then((user) => {
            if (user.name) {
              // they are registed in the database, and currently logged in.
              this.setState({ username: user.name });
            }
          });
        
          get("/api/boards").then((board) => {
              console.log("got for " + board.honoree_name);
              this.setState({
                  honoree_name: board.honoree_name,
                  date: board.date,
                  place: board.place,
                  msg: board.msg
              });
          });
    }

    render() {
        const state ={rotation: 160};//
        return (
            <div id="PersonalSpace-container" className="personal">
                <h1>{this.state.honoree_name}</h1>
                <div>
                    <p>date {this.state.date}</p>
                    <p>place {this.state.place}</p>
                    <p>msg {this.state.msg}</p>

                <P5Wrapper sketch={sketch} shape={state.shape} />
                
                <DownloadButton text="Download the flowers" linkDestination="/personalspace" />
                <WhiteButton text="EXPLORE THE GRIEVING SPACE" linkDestination="/" />
                <WhiteButton text="New Space" linkDestination="/contribute" />
                </div>
            </div>
        )
    }
}

export default PersonalSpace;
