import React, { Component } from "react";
import WhiteButton from "../modules/WhiteButton.js";
import DownloadButton from "../modules/DownloadButton.js";
import P5Wrapper from "react-p5-wrapper";
import ReactDOM from 'react-dom';
import sketch from '../modules/sketch';

import "../../utilities.css";
import "./Contribute_2.css";

import { get, post } from "../../utilities";

class Contribute_2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: String,
            honoree_name: String,
            date: String,
            place: String,
            msg: String,
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
            console.log("got data")
            this.setState({
                honoree_name: board.honoree_name,
                date: board.date,
                place: board.place,
                msg: board.msg
            })
        })
    }


    render() {
        
        const state ={rotation: 160};
        return (
            <div class="relative">
                <p>Hi, {this.state.username}</p>
                <p>Name: {this.state.honoree_name}</p>
                <p>Date: {this.state.date}</p>
                <p>Place: {this.state.place}</p>
                <p>Message: {this.state.msg}</p>


                    <div class="absoluteleft"><P5Wrapper sketch={sketch} shape={state.shape} /></div>
                    <input
                    type="range"
                    defaultValue={state.shape}
                    min="0"
                    max="360"
                    step="1"
                    onChange={event => setState({ ...state, shape: event.target.value })}/>

                    <div class="absolutebutton">
                    <DownloadButton text="Download" linkDestination="/" />
                    <WhiteButton text="Submit" linkDestination="/personalspace" />
                    </div>
                </div>
        )
    }
}

export default Contribute_2;