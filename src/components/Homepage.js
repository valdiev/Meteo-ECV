import React, { Component } from "react";
import localMeteoRepository from "../repository/localMeteoRepository";
import forecastMeteoRepository from "../repository/forecastMeteoRepository";
import Loader from './Loader';
import App from "../App";
import Card from "./Card";


export default class Homepage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            lat : "tt",
            long : "",
            weather: "",
            weatherForecast: "",
            ville: "",
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
                    weather: await localMeteoRepository.getWeather(latitude,longitude),
                    weatherForecast: await forecastMeteoRepository.getWeather(latitude, longitude)
                });
                console.log(this.state.weatherForecast.daily);
            });

            
        }
    }

    render() {
        return (
            <div>
                <App/>
                {this.state.weather ?
                    <Card name={this.state.weather.name} temp={this.state.weather.main.temp} weather={this.state.weather.weather[0].icon} listPrevision={this.state.weatherForecast.daily}/>
                    : <Loader />
                }
            </div>
        );
    }
}