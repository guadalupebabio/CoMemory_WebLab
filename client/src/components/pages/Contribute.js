import React, { Component } from "react";
import WhiteButton from "../modules/WhiteButton.js";
import HomeButton from "../modules/HomeButton.js";
import InputLine from "../modules/InputLine";

import "../../utilities.css";
import "./Contribute.css";
import { post } from "../../utilities";
//import { get } from "core-js/fn/dict";


class Contribute extends Component {
    constructor(props) {
        super(props);
    }
    

    componentDidMount() {
        // //Make api post
        // adddate = (value) => {
        // const body = { parent: this.props.storyId, content: value };
        // post("/api/date", body);
        //};
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

    

    

    render() {
        return (
            <div id="Form-container" className="form">
                <h1>Hi, User</h1>
                    <form action="..." method="post"> 
                        <ul>
                            <label for="name">Name</label>
                            <li>
                                <InputLine typeValue="text" idValue="name" placeholderValue="Name" />
                            </li>
                            <label for="date">A Date (birth, special date, death, etc.)</label>
                            <li>
                                <InputLine typeValue="text" idValue="date" placeholderValue="mm/dd/yyyy" />
                            </li>
                            <label for="place">A Place (favorite, hometown, resting place, etc.)</label>
                            <li>
                                <InputLine typeValue="text" idValue="place" placeholderValue="Location" />
                            </li>
                            <label for="message">A Message</label>
                            <li>
                                <InputLine typeValue="text" idValue="name" placeholderValue="Say something" />
                            </li>
                        </ul>
                    </form>                
                <div>
                   
                {/*TODO: Fix the link desinations*/}
                <WhiteButton text="Submit" linkDestination="/yourcontribution" onClick={this.handleSubmit} /> 
                </div>
            </div> 
             
        );
    }
}


export default Contribute;