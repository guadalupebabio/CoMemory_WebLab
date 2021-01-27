import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import RegLine from "../modules/RegLine";
import WhiteButton from "../modules/WhiteButton.js";
import { navigate } from '@reach/router';

//import "../../utilities.css";
import "./Registration.css";


//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "136526920473-t1lo12n7ojqbh3um8t84j3jdbc07i64n.apps.googleusercontent.com";

class Registration extends Component {
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
          <h1>Register</h1>
          {/* TODO: fix action attribute */}
            <form action="..." method="post"> 
              <ul>
                <li>
                  <RegLine typeValue="string" idValue="email" placeholderValue="somebody@example.com" />
                </li>
                <li>
                  <RegLine typeValue="string" idValue="username" placeholderValue="username" />
                </li>
                <li>
                  <RegLine typeValue="password" idValue="password" placeholderValue="password" />
                </li>
                <li>
                <WhiteButton text="Sign up" linkDestination="/contributestep1" />  
                </li>
                <li>
                  {this.props.userId ? (
                    <GoogleLogout
                      clientId={GOOGLE_CLIENT_ID}
                      buttonText="Logout"
                      onLogoutSuccess={this.props.handleLogout}
                      onFailure={(err) => console.log(err)}
                    />
                  ) : (
                    <GoogleLogin
                      clientId={GOOGLE_CLIENT_ID}
                      buttonText="Log in with Google"
                      onSuccess={this.props.handleLogin}
                      onFailure={(err) => console.log(err)}
                    />
                  )}
                  <p id="smalltxt">already have an account? <b><a href="/login">Log in</a></b></p>
                </li>
              </ul>
            </form>
            
        </div>
        
         
        </>
      );
    }
  }
}

export default Registration;
