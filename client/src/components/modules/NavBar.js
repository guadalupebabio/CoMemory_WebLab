import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import WhiteButton from '../modules/WhiteButton.js';

import "./NavBar.css";

const GOOGLE_CLIENT_ID = "136526920473-t1lo12n7ojqbh3um8t84j3jdbc07i64n.apps.googleusercontent.com";


class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="upperright">
						<WhiteButton text="New" linkDestination="/contributestep1" />
                        <GoogleLogout
                      clientId={GOOGLE_CLIENT_ID}
                      buttonText="Logout"
                      onLogoutSuccess={this.props.handleLogout}
                      onFailure={(err) => console.log(err)}
                    />
			</div>
        );
    }
}

export default NavBar;