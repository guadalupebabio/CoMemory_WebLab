import React, { Component } from "react";
import WhiteButton from "../modules/WhiteButton.js";
import InputLine from "../modules/InputLine";

import "../../utilities.css";
import "./Contribute.css";

class Contribute extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // remember -- api calls go here!
    }

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
                <WhiteButton text="Submit" linkDestination="/" />
                </div>
            </div>  
        )
    }
}

export default Contribute;

{/*

            
                
                <input type="checkbox" id="privacy" value="private">
                <label for="privacy"> Check the box if you want your entry to be private</label><br> */}
                