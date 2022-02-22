import React, { Component } from "react";
import localMeteoRepository from "../repository/localMeteoRepository";
import forecastMeteoRepository from "../repository/forecastMeteoRepository";

export default class Homepage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            lat : "tt",
            long : "",
            weather: "",
            weatherForecast: ""
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
                    weather: await localMeteoRepository.getWeather(latitude,longitude),
                    weatherForecast: await forecastMeteoRepository.getWeather(latitude, longitude)
                });
                console.log(this.state.weatherForecast);
            });
        }
    }

    render() {
        console.log(this.state.isLoaded);
        return (
            <div>
                <p>{this.state.isLoaded}</p>
                {this.state.isLoaded ?
                    <main>
                        <div className="position">
                            <p>{this.state.weather.name}</p>
                            <p>{this.state.weather.weather[0].description}</p>
                            <p>{Math.floor(this.state.weather.main.temp - 273.15)}</p>
                        </div>
                        <div className="forecast">
                            <p>test</p>
                        </div>
                    </main>
                    : <p>chargement</p>
                }
            </div>
        );
    }
}