import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import RegLine from "../modules/RegLine";
import WhiteButton from "../modules/WhiteButton.js";

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
              <WhiteButton text="Log in" linkDestination="/contribute" />  
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
                    buttonText="Login"
                    onSuccess={this.props.handleLogin}
                    onFailure={(err) => console.log(err)}
                  />
                )}
              </li>
            </ul>
          </form>
          
      </div>
      
        {/* <h1>Good luck on your project :)</h1>
        <h2> What we provide in this skeleton</h2>
        <ul>
          <li>Google Auth (Skeleton.js & auth.js)</li>
          <li>Socket Infrastructure (client-socket.js & server-socket.js)</li>
          <li>User Model (auth.js & user.js)</li>
        </ul>
        <h2> What you need to change</h2>
        <ul>
          <li>Change the font in utilities.css</li>
          <li>Change the Frontend CLIENT_ID for Google Auth (Skeleton.js)</li>
          <li>Change the Server CLIENT_ID for Google Auth (auth.js)</li>
          <li>Change the Database SRV for Atlas (server.js)</li>
          <li>Change the Database Name for MongoDB (server.js)</li>
          <li>Add a favicon to your website at the path client/dist/favicon.ico</li>
          <li>Update website title in client/dist/index.html</li>
        </ul> */}
      </>
    );
  }
}

export default Registration;
