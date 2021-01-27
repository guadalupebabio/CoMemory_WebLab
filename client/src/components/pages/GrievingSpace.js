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
            <div className="gscontainer">
                <p className="upperleft">A virtual space to honor and grieve  loved ones</p>
                <div className="upperright">
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