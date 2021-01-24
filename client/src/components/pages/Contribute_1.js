import React, { Component } from "react";
import WhiteButton from "../modules/WhiteButton.js";
import HomeButton from "../modules/HomeButton.js";
import InputLine from "../modules/InputLine";

import "../../utilities.css";
import "./Contribute_1.css";

import { get, post } from "../../utilities";

/**
 * 
 * Proptypes
 * @param {string} linkDestination
 * 
 */

// const Board = require("../../../../server/models/board");

class Contribute_1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creator_id: String,
            honoree_name: String,
            date: String,
            place: String,
            msg: String
        }
    }

    componentDidMount() {
        get("/api/whoami").then((user) => {
            if (user.name) {
                // they are registed in the database, and currently logged in.
                this.setState({ creator_id: user._id });
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
     handleSubmit = (event) => {
         event.preventDefault();
         console.log("successfully submitted")
         const body = {
             creator_id: this.state.creator_id,
             honoree_name: this.state.honoree_name,
             date: this.state.date,
             place: this.state.place,
             msg: this.state.msg
        };
        console.log(body)
        post("/api/board", body).then((board) => {
            console.log("posted for " + body.honoree_name);

            this.setState({
                honoree_name: "",
                date: "",
                place: "",
                msg: ""
            });
        });
     };

    changeName = (newName) => { this.setState({honoree_name: newName}) }
    changeDate = (newDate) => { this.setState({date: newDate}) }
    changePlace = (newPlace) => { this.setState({place: newPlace}) }
    changeMsg = (newMsg) => { this.setState({msg: newMsg}) }

    render() {
        return (
            <div id="Form-container" className="form">
                <p>hi, {this.state.creator_id}</p>
                <p>{this.state.honoree_name}</p>
                    <form action="..." method="post"> 
                        <ul>
                            <label htmlFor="name">Name</label>
                            <li>
                                <InputLine typeValue="text" idValue="name" placeholderValue="Name" changeFunction={this.changeName} />
                            </li>
                            <label htmlFor="date">A Date (birth, special date, death, etc.)</label>
                            <li>
                                <InputLine typeValue="text" idValue="date" placeholderValue="mm/dd/yyyy" changeFunction={this.changeDate} />
                            </li>
                            <label htmlFor="place">A Place (favorite, hometown, resting place, etc.)</label>
                            <li>
                                <InputLine typeValue="text" idValue="place" placeholderValue="Location" changeFunction={this.changePlace} />
                            </li>
                            <label htmlFor="message">A Message</label>
                            <li>
                                <InputLine typeValue="text" idValue="name" placeholderValue="Say something" changeFunction={this.changeMsg} />
                            </li>
                        </ul>
                    </form>                  
                <HomeButton text="Next" clickFunction={this.handleSubmit} linkDestination="/contributestep2" /> 
            </div>     
        );
    }
}

export default Contribute_1;