import React, { Component } from "react";

export default class Homepage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            lat : "tt",
            long : ""
        }
    }

    async componentDidMount(){
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                this.setState({
                    ...this.state,
                    lat: latitude,
                    long : longitude,
                    isLoaded: true,
                });

            });
        }
    }

    render() {
        console.log(this.state.isLoaded);
        return (
            <div>
                <p>{this.state.isLoaded}</p>
                {this.state.isLoaded ?
                    <div className="position">
                        <p>{this.state.long}</p>
                        <p>{this.state.lat}</p>
                    </div>
                    : <p>chargement</p>
                }
            </div>
        );
    }
}