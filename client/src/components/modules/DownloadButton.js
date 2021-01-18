import React, { Component } from "react";


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
        
        return (
            <button id="p5Wrapper-download-button" className="WhiteButton-style u-pointer">{this.props.text}</button>
        );
    }
}

export default DownloadButton;