import React, { Component } from "react";
import WhiteButton from "../modules/WhiteButton.js";
import HomeButton from "../modules/HomeButton.js";
import InputLine from "../modules/InputLine";

import "../../utilities.css";
import "./Contribute.css";

import { get, post } from "../../utilities";

/**
 * 
 * Proptypes
 * @param {string} linkDestination
 * 
 */

// const Board = require("../../../../server/models/board");

class Contribute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: String,
            honoree_name: String,
            date: String,
            place: String,
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

    /*
    pseudocode:
        Contribute's state stores all the info
        onSubmit:
            post that info in state to the database <-- done... sort of?
            redirect to personal space <-- done
        
        in PersonalSpace
            get the data from the database <-- this is done
            populate <-- also done
*/

    // called when the user hits "Submit" for a new space
     handleSubmit = () => {
         const body = { honoree_name: this.state.honoree_name, date: this.state.date, place: this.state.place, msg: this.state.msg };
         post("/api/board", body).then((board) => {
           console.log("posted for " + body.honoree_name);
         });

         this.setState({
            honoree_name: "",
            date: "",
            place: "",
         });
     };

    changeName = (newName) => { this.setState({honoree_name: newName}) }
    changeDate = (newDate) => { this.setState({date: newDate}) }
    changePlace = (newPlace) => { this.setState({place: newPlace}) }
    changeMsg = (newMsg) => { this.setState({msg: newMsg}) }

    render() {
        return (
            <div id="Form-container" className="form">
                <h1>Hi, {this.state.username}</h1>
                    <form action="..." method="post"> 
                        <ul>
                            <label for="name">Name</label>
                            <li>
                                <InputLine typeValue="text" idValue="name" placeholderValue="Name" changeFunction={this.changeName} />
                            </li>
                            <label for="date">A Date (birth, special date, death, etc.)</label>
                            <li>
                                <InputLine typeValue="text" idValue="date" placeholderValue="mm/dd/yyyy" changeFunction={this.changeDate} />
                            </li>
                            <label for="place">A Place (favorite, hometown, resting place, etc.)</label>
                            <li>
                                <InputLine typeValue="text" idValue="place" placeholderValue="Location" changeFunction={this.changePlace} />
                            </li>
                            <label for="message">A Message</label>
                            <li>
                                <InputLine typeValue="text" idValue="name" placeholderValue="Say something" changeFunction={this.changeMsg} />
                            </li>
                        </ul>
                    </form>                
                <div>
                   
                <WhiteButton text="Submit" onClick={this.handleSubmit} linkDestination="/personalspace" /> 
                </div>
            </div>     
        );
    }
}

export default Contribute;