import React, { Component } from "react";
import { render } from "react-dom";

import "./Board.css";

/**
 * 
 * Proptypes
 * @param {string} _id of the memory
 * @param {string} honoree_name
 * @param {string} date
 * @param {string} place
 * @param {string} msg
 * 
 */

class Board extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="Board-styles">
          <p id="Board-name">{this.props.honoree_name}</p>
          <p>Date: {this.props.date}</p>
          <p>Place: {this.props.place}</p>
          <p>{this.props.msg}</p>
        </div>
      );
    }
  }
  
  export default Board;