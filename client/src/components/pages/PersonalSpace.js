import React, { Component } from "react";
import WhiteButton from "../modules/WhiteButton.js";

import "../../utilities.css";
import "./PersonalSpace.css";

class Contribute extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // remember -- api calls go here!
    }

    render() {
        return (
            <div id="PersonalSpace-container" className="personal">
                <h1>Hi, User</h1>
            

                <div>
                {/*TODO: Fix the link desinations*/}
                <WhiteButton text="New Space" linkDestination="/" />
                </div>
            </div>
        )
    }

}
export default Contribute;