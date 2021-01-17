import React, { Component } from "react";
import HomeButton from "../modules/HomeButton.js";

import "../../utilities.css";
import "./Home.css";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "Home";
    }

    render() {
        return (
            <div id="buttonContainer" className="u-flexColumn u-flex-alignCenter u-flex-justifyCenter">
                <h1>A virtual space to honor and grieve loved ones</h1>
                <HomeButton text="EXPLORE THE SPACE" linkDestination="/" />
                <HomeButton text="CREATE A STAR" linkDestination="/register" />
            </div>
        )
    }
}

export default Home;