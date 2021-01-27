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
            <div className="gscontainer" >
                <NavBar userId={this.props.userId} handleLogin={this.props.handleLogin} handleLogout={this.props.handleLogout} />
                <p className="upperleft">A virtual space to honor and grieve loved ones</p>
                {this.state.flowers.length === 0 ? <p className="middle">Contribute a memory</p>: this.state.flowers.map((flower) => (<img src={flower}></img>))}
                
            </div>   

            // <div className="gscontainer">
            //     <p className="upperleft">A virtual space to honor and grieve  loved ones</p>
            //     <div className="upperright">
                
            //     {this.state.isLoggedIn ? (
            //         <WhiteButton text="New" linkDestination="/contributestep1" />
            //       ):(
            //         <WhiteButton text="New" linkDestination="/login" />
            //       )}
            //     </div>
            //     <p id="footer">Hover over image to visualize text</p>
            // </div>
        ) 
    }
}

export default GrievingSpace;