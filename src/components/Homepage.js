import React, { Component } from "react";
import localMeteoRepository from "../repository/localMeteoRepository";
import forecastMeteoRepository from "../repository/forecastMeteoRepository";

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
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.weather ?
                    <main>
                        <div className="position">
                            <p>{this.state.weather.name}</p>
                            <p>{this.state.weather.weather[0].description}</p>
                            <p>{Math.floor(this.state.weather.main.temp - 273.15)}°</p>
                            {this.state.weatherForecast.daily.map((jour,index) => {
                                return <ul>
                                    <li>day : {index+1}</li>
                                    <li>temp morning : {Math.floor(jour.temp.morn - 273.15) }°</li>
                                    <li>temp night : {Math.floor(jour.temp.night - 273.15) }°</li>
                                    <li>IL VA FAIRE : {jour.weather[0].main}</li>
                                    <li>test : {jour.weather[0].description}</li>
                                </ul>
                            })}
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