import React, { Component } from "react";
import { render } from "react-dom";

import "./InputLine.css";

/**
 * 
 * Proptypes
 * 
 * @param {string} typeValue
 * @param {string} idValue
 * @param {string} placeholderValue
 * 
 */

class InputLine extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // remember -- api calls go here!
      }
    // componentDidMount() {
    //     get("/api/dates").then((dateObjs) =>{
    //         this.setState({dates: dateObjs})
    //     });
    // }

    render() {
        return (
            <input className="InputLine-style" type={this.props.typeValue} id={this.props.idValue} placeholder={this.props.placeholderValue} />
        );
    }
}

export default InputLine;