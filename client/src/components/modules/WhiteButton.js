import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "@reach/router";

import "./WhiteButton.css";

/**
 * 
 * Proptypes
 * @param {string} text
 * @param {string} linkDestination
 * 
 */

class WhiteButton extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
        <Link to={this.props.linkDestination}> 
            <button className="WhiteButton-style u-pointer">{this.props.text}</button>
        </Link>
        );
    }
}

export default WhiteButton;