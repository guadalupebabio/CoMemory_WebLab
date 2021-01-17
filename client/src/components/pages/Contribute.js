import React, { Component } from "react";
import WhiteButton from "../modules/WhiteButton.js";

import "./Contribute.css";

class Contribute extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "Contribute";
    }

    render() {
        return (

            
            // {/* <label for="name">Name:</label> */}
            // {/* <input type="text" id="name" placeholder="Name"/>  */}
            

                
                <div>
                {/*TODO: Fix the link desinations*/}
                <WhiteButton text="Submit" linkDestination="/" />
                </div>
            
        )
    }
}

export default Contribute;

{/* <div className="form">
                    <label for="name">Name:</label><br>
                    <input type="text" id="name" placeholder="Name">
                </div>  

                /* <div class="form">
                    <label for="date">A Date (birth, special date, death, etc.)</label><br>
                    <input type="text" id="date" placeholder="mm/dd/yyyy">
                </div>  
                <div class="form">
                    <label for="place">A Place (favorite, hometown, resting place, etc.)</label><br>
                    <input type="text" id="place" placeholder="Location">
                </div>
                <div class="form">
                    <label for="message">A Message</label><br>
                    <input type="text" id="message" placeholder="Say something">
                </div>
                
                <input type="checkbox" id="privacy" value="private">
                <label for="privacy"> Check the box if you want your entry to be private</label><br> */}
                