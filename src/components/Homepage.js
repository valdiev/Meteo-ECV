import React, { Component } from "react";
import localMeteoRepository from "../repository/localMeteoRepository";
import forecastMeteoRepository from "../repository/forecastMeteoRepository";
import Search from "../views/Search";

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

    format() {
        var options = { weekday: 'long', month: 'long', day: 'numeric'}
        return new Date().toLocaleDateString([], options);
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
                console.log(this.state.weather);
            });

            
        }
    }

    render() {
        return (
            <div>
                {this.state.weather ?
                    <main className="position">
                        <div className="position__information container">
                            <div className="position__information-date">
                                <h2>{this.format()}</h2>
                            </div>
                            <div className="position__information-city">
                                <h2>{this.state.weather.name}</h2>
                                <h3>{Math.floor(this.state.weather.main.temp - 273.15)}°</h3>
                            </div>
                            <div className="position__information-prevision">
                                {this.state.weatherForecast.daily.map((jour,index) => {
                                    return <div className="position__information-prevision-day">
                                            <h4>day : {index+1}</h4>
                                            <span>{Math.floor(jour.temp.day - 273.15) }°</span>
                                        </div>
                                })}
                            </div>
                        </div>
                        <div className="position__image" style={{backgroundImage: `url(/img/${this.state.weather.weather[0].icon}.jpg)`}}>
                        </div>
                    </main>
                    : <p>chargement</p>
                }
            </div>
        );
    }
}