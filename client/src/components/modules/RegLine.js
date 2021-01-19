import React, { Component } from "react";
import { render } from "react-dom";

import "./RegLine.css";

/**
 * 
 * Proptypes
 * 
 * @param {string} typeValue
 * @param {string} idValue
 * @param {string} placeholderValue
 * 
 */

class RegLine extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // remember -- api calls go here!
      }
   

    render() {
        return (
            <input className="RegLine-style" type={this.props.typeValue} id={this.props.idValue} placeholder={this.props.placeholderValue} />
        );
    }
}

export default RegLine;