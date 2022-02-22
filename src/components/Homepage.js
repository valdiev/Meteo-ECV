import React, { Component } from "react";

export default class Homepage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            lat : "tt",
            long : "",
            isLoaded: false
        }
    }

    async componentDidMount(){
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async function (position) {
                const longitude = position.coords.longitude;
                const latitude = position.coords.latitude;
                console.log(longitude);
                console.log(latitude);
                this.setState({
                    lat: latitude,
                    long: longitude,
                    isLoaded: true,
                });
            });
        } else {
            console.log("je ne suis pas activé")
        }
    }

    render() {
        return (
            <div>
                <p>dzelkf</p>
                {this.isLoaded === true ?
                    <p>{this.state.longitude}</p> : null
                }
            </div>
        );
    }
}