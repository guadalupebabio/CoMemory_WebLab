import React, { Component } from "react";
import WhiteButton from "../modules/WhiteButton.js";

import "../../utilities.css";
import "./GrievingSpace.css";

class GrievingSpace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: String,
            isLoggedIn: false
        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div id="" className="">
                <p id="header">A virtual space to honor and grieve  loved ones</p>
                <div class="upperright">
                {/* <WhiteButton text="New" linkDestination="/contributestep1" /> */}
                {this.state.isLoggedIn ? (
                    <WhiteButton text="New" linkDestination="/contributestep1" />
                  ):(
                    <WhiteButton text="New" linkDestination="/login" />
                  )}
                </div>
                <p id="footer">Hover over image to visualize text</p>
            </div>
        )
    }
}

export default GrievingSpace;