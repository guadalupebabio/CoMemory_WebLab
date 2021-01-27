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
            <div id="Home-container" >
                <div className="txtHome" >
                
                <h1>Co-Memory</h1>
                
                <h1 >A virtual space to honor and grieve loved ones</h1>
                <div className="container" >
                <p id="subtitle" >Grieving has changed. Approximately 420,000 Americans have died from the coronavirus, and more than 2 million people in the world have succumbed to the disease.  Let’s leverage the digital realm that keep us together to host the platform that will allow our community to commemorate those who are no longer with us.</p>
                </div>
                <HomeButton text="EXPLORE THE GRIEVING SPACE" linkDestination="/grievingspace" />
                <HomeButton text="MAKE A CONTRIBUTION" linkDestination="/register" />
                </div>
                
            </div>
        )
    }
}

export default Home;