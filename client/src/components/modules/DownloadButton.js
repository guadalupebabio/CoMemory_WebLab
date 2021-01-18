import React, { Component } from "react";
import { render } from "react-dom";

import "./WhiteButton.css";

/**
 * 
 * Proptypes
 * @param {string} text
 * 
 */

class DownloadButton extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        function clickHandler(){
            console.log("old Button clicked")
        }
        return (
            <button onClick={clickHandler} className="WhiteButton-style u-pointer">{this.props.text}</button>
        );
    }
}

export default DownloadButton;