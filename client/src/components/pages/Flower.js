import React, { Component } from "react";
import WhiteButton from "../modules/WhiteButton.js";
import HomeButton from "../modules/HomeButton.js";
import P5Wrapper from "react-p5-wrapper"
import ReactDOM from 'react-dom';
import sketch from '../modules/sketch';

import "../../utilities.css";
import "./Flower.css";

class Flower extends Component {
    constructor(props) {
        super(props);
    }
    

    componentDidMount() {
        // remember -- api calls go here!
    }


    render() {
        return (
            <div>
                {/*TODO: Fix the link desinations*/}
                <P5Wrapper sketch={sketch} />
                <WhiteButton text="Download the flower" linkDestination="/" />
                <WhiteButton text="EXPLORE THE GRIEVING SPACE" linkDestination="/" />
                </div>
        )
    }
}

export default Flower;