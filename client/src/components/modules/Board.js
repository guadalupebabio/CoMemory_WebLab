import React, { Component } from "react";
import { render } from "react-dom";

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
        <div>
          <p>Name: {this.props.honoree_name}</p>
          <p>Date: {this.props.date}</p>
          <p>Place: {this.props.place}</p>
          <p>Message: {this.props.msg}</p>
        </div>
      );
    }
  }
  
  export default Board;