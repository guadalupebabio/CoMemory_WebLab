import React, { Component } from "react";
import WhiteButton from "../modules/WhiteButton.js";
import DownloadButton from "../modules/DownloadButton.js";
import P5Wrapper from "react-p5-wrapper";
import ReactDOM from 'react-dom';
import sketch from '../modules/sketch';

import "../../utilities.css";
import "./Contribute_2.css";


class Contribute_2 extends Component {
    constructor() {
        super();
        this.state = {
            name: String,
            date: String,
            place: String,
            message: String,
        }
    }
    

    componentDidMount() {
        // remember -- api calls go here!
        // get("/api/whoami").then((user) => {
        //     if (user.name) {
        //         // they are registed in the database, and currently logged in.
        //         this.setState({ username: user.name });
        //     }
        // });
    }


    render() {
        
        const state ={rotation: 160};//
        return (
            
            <div className="flowercontainer">
                <div class="cont2txt"> 
                <p>Name: jghvsdbcljbeaiorbvliesr {this.state.name}</p>
                <p>Date: jghvsdbcljbeaiorbvliesr {this.state.date}</p>
                <p>Place: jghvsdbcljbeaiorbvliesr {this.state.place}</p>
                <p>Message: jghvsdbcljbea iorbvliesrjghvsdbcljbeaio rbvliesrjghvsdbcljbeai orbvliesrjghv {this.state.message}</p>

                </div >

                <div class="cont2flower"><P5Wrapper sketch={sketch} shape={state.shape} /></div>
                {/* <input type="range" defaultValue={state.shape} min="0" max="360" step="1" onChange={event => setState({ ...state, shape: event.target.value })}/> */}

                <div class="cont2buttons">
                <a href="/contributestep1">back</a> 
                <DownloadButton text="Download" linkDestination="/" />
                <WhiteButton text="Submit" linkDestination="/personalspace" />
                </div>

            </div>
        )
    }
}

export default Contribute_2;