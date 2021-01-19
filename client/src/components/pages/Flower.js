import React, { Component } from "react";
import WhiteButton from "../modules/WhiteButton.js";
import DownloadButton from "../modules/DownloadButton.js";
import P5Wrapper from "react-p5-wrapper";
import ReactDOM from 'react-dom';
import sketch from '../modules/sketch';

import "../../utilities.css";
import "./Flower.css";


class Flower extends Component {
    constructor() {
        super();
        //this.state = { shape: 16};
    }
    

    componentDidMount() {
        // remember -- api calls go here!
    }


    render() {
        
        const state ={rotation: 160};//
        return (
            
            <div>
                <P5Wrapper sketch={sketch} shape={state.shape} />
                <input
				type="range"
				defaultValue={state.shape}
				min="0"
				max="360"
				step="1"
				onChange={event => setState({ ...state, shape: event.target.value })}
			/>
                <DownloadButton text="Download the flowers" linkDestination="/personalspace" />
                <WhiteButton text="EXPLORE THE GRIEVING SPACE" linkDestination="/" />
                </div>
        )
    }
}

export default Flower;