import React, { Component } from "react";
import HomeButton from "../modules/HomeButton.js";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "Home";
    }

    render() {
        return (
            <div className="u-flexColumn u-flex-alignCenter">
                {/*TODO: Fix the link desinations*/}
                <HomeButton text="EXPLORE THE SPACE" linkDestination="/" />
                <HomeButton text="CREATE A STAR" linkDestination="/" />
            </div>
        )
    }
}

export default Home;