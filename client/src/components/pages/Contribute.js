import React, { Component } from "react";
import WhiteButton from "../modules/WhiteButton.js";
import HomeButton from "../modules/HomeButton.js";
import InputLine from "../modules/InputLine";

import "../../utilities.css";
import "./Contribute.css";
import { post } from "../../utilities";
//import { get } from "core-js/fn/dict";


import { get, post } from "../../utilities";

class Contribute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: String
        }
    }
    

    componentDidMount() {
        // //Make api post
        // adddate = (value) => {
        // const body = { parent: this.props.storyId, content: value };
        // post("/api/date", body);
        //};

        get("/api/whoami").then((user) => {
            if (user.name) {
                // they are registed in the database, and currently logged in.
                this.setState({ username: user.name });
            }
        });
    }

    // // called whenever the user types in the new post input box
    // handleChange = (event) => {
    //     this.setState({
    //     value: event.target.value,
    //     });
    // };
    values = [];

    // called when the user hits "Submit" for a new post
     handleSubmit = (event) => {
         event.preventDefault();
         this.props.onSubmit && this.props.onSubmit(this.state.values);
         this.setState({
         value: "",
         });
     };

     //add here the input from the form
    //  update= (newValue) => {
    //      this.updateValue(<current index>, newValue)
    // }

    /*
    1. store state of this.state.name and this.state.date and this.state.place etc. bc you have a submit button here and it needs those things to submit
    2. each input line needs to update the state each time the text changes
    usually give input a value
    then handleChange function (takes in event) update state to be event.target.value (what the user types in the input box)

    write four functions and each of them changes the name/date/etc.
    */

   changeName = (newName) => { this.setState({name: newName}) }
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
                   
                {/*TODO: Fix the link desinations*/}
                <WhiteButton text="Submit" linkDestination="/personalspace" onClick={this.handleSubmit} /> 
                </div>
            </div> 
             
        );
    }
}

export default Contribute;