import React, { Component } from "react";
import HomeButton from "../modules/HomeButton.js";
import P5Wrapper from 'react-p5-wrapper';

import "../../utilities.css";
import "./Home.css";

/**
 * 
 * Proptypes
 * @param {string} userId
 * 
 */

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "Home";
    }

    render() {
        let goTo;
        this.props.userId ? goTo = "/contributestep1" : goTo = "/register";
        const state = { rotation: 160 };
        return (
            <div id="Home-container" >
                <div className="txtHome" >
                
                <h1 className="Home-heading">Co-Memory</h1>
                
                <h1 className="Home-heading">A virtual space to honor and grieve loved ones</h1>
                <div className="container" >
                <p id="subtitle" >Grieving has changed. Approximately 420,000 Americans have died from the coronavirus, and more than 2 million people in the world have succumbed to the disease.  Let’s leverage the digital realm that keep us together to host the platform that will allow our community to commemorate those who are no longer with us.</p>
                </div>
                <HomeButton text="EXPLORE THE GRIEVING SPACE" linkDestination="/grievingspace" />
                <HomeButton text="MAKE A CONTRIBUTION" linkDestination="/register" />
                {/* <P5Wrapper sketch={(p) => {return sketch(p);}} shape={this.state.shape}/>  */}
                </div>
                
            </div>
        )
    }
}

export default Home;