import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import RegLine from "../modules/RegLine";
import WhiteButton from "../modules/WhiteButton.js";
import { navigate } from '@reach/router';

//import "../../utilities.css";
import "./LogIn.css";


//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "136526920473-t1lo12n7ojqbh3um8t84j3jdbc07i64n.apps.googleusercontent.com";

class LogIn extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    //this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    if (this.props.userId) {
      navigate('/personalspace');
      return null;
    } else {
      return (
        <>
        <div id="Registration-container" className="registration">
          <h1>Log In</h1>
          {/* TODO: fix action attribute */}
            <form action="..." method="post"> 
              <ul>
                <li>
                  <RegLine typeValue="string" idValue="username" placeholderValue="username" />
                </li>
                <li>
                  <RegLine typeValue="password" idValue="password" placeholderValue="password" />
                </li>
                <li>
                <WhiteButton text="Log in" linkDestination="/contributestep1" />  
                </li>
                <p id="smalltxt">Don't have an account? <b><a href="/register">Sign up</a></b></p>
  
              </ul>
            </form>
            
        </div>
      
        </>
      );
    }
  }
}

export default LogIn;
