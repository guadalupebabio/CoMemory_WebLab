import React, { Component } from "react";
import WhiteButton from "../modules/WhiteButton.js";

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
    }

    render() {
        return (
            <div id="PersonalSpace-container" className="personal">
                <h1>Hi, {this.state.username}</h1>
                <div>
                {/*TODO: Fix the link desinations*/}
                <WhiteButton text="New Space" linkDestination="/" />
                </div>
            </div>
        )
    }
}

export default PersonalSpace;
