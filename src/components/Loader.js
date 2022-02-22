import {Component} from "react";

export default class Homepage extends Component{
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="loader_container">
                <div className="weather-loader"></div>
            </div>
        )
    }
}