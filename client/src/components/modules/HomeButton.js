import React, { Component } from "react";
import { render } from "react-dom";
import "./HomeButton.css";

class HomeButton extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
        // TODO: fix link destination
        <Link to="/"> 
            <button>{this.props.text}</button>
        </Link>
        );
    }
}

export default HomeButton;