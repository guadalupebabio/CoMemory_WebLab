import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "@reach/router";

import "./HomeButton.css";

/**
 * 
 * Proptypes
 * @param {string} text
 * @param {string} linkDestination
 * @param {function} clickFunction
 * 
 */

class HomeButton extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
        <Link to={this.props.linkDestination}> 
            <button className="HomeButton-style u-pointer" onClick={this.props.clickFunction}>{this.props.text}</button>
        </Link>
        );
    }
}

export default HomeButton;