import React, { Component } from "react";
import { render } from "react-dom";

class HomeButton extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (<button>{this.props.text}</button>);
    }
}

export default HomeButton;