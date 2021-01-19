import React, { Component } from "react";
import WhiteButton from "../modules/WhiteButton.js";

import "../../utilities.css";
import "./PersonalSpace.css";

import { get, post } from "../../utilities";

const Board = require("./models/board");

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
        
          get("/api/board").then((board) => {
              this.setState({
                  honoree_name: board.honoree_name,
                  date: board.date,
                  place: board.place,
                  msg: board.msg
              });
          });
    }

    render() {
        return (
            <div id="PersonalSpace-container" className="personal">
                <h1>{this.state.honoree_name}</h1>
                <div>
                <WhiteButton text="New Space" linkDestination="/contribute" />
                </div>
            </div>
        )
    }
}

export default PersonalSpace;
