import React, { Component } from "react";
import WhiteButton from "../modules/WhiteButton";
import NavBar from "../modules/NavBar";

import "../../utilities.css";
import "./GrievingSpace.css";
import { get } from "../../utilities.js";

/**
 * 
 * Proptypes
 * @param {string} userId
 * @param {function} handleLogin
 * @param {function} handleLogout
 * 
 */

class GrievingSpace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            flowers: [],
        }
    }

    componentDidMount() {
        get('/api/getImages').then((flowers) => {
            console.log('got flowers');
            this.setState({
                flowers,
            });
		});
    }

    render() {
        return (
            <div id="" className="">
                <NavBar userId={this.props.userId} handleLogin={this.props.handleLogin} handleLogout={this.props.handleLogout} />
                {this.state.flowers.length === 0 ? "Contribute a memory" : this.state.flowers.map((flower) => (<img src={flower}></img>))}
                <p id="header">A virtual space to honor and grieve loved ones</p>
                <p id="footer">Hover over image to visualize text</p>
            </div>
        )
    }
}

export default GrievingSpace;