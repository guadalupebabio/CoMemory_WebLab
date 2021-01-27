import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "@reach/router";

import "./WhiteButton.css";

/**
 * 
 * Proptypes
 * @param {string} text
 * @param {string} linkDestination
 * @param {function} onClick
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
            <button onClick = {this.props.onClick} className="WhiteButton-style u-pointer">{this.props.text}</button>
        </Link>
        );
    }
}

export default WhiteButton;

/*
1. links to --> Space page (create page)
2. send info to the database (memory/board)
3. Space get that info

weblab.to/react-guide
*/