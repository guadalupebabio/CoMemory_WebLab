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
        }
    }

    componentDidMount() {
        get("/api/whoami").then((user) => {
            if (user.name) {
                // they are registed in the database, and currently logged in.
                this.setState({ username: user.name });
            }
        });
    }

    render() {

        return (
            <div className="pscontainer">
                <div className="upperleft"><h2>Hi, {this.state.username}</h2></div>
                
                <div class="upperright">
                
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
