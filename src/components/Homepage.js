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
                console.log(this.state.weatherForecast);

            });
        }
    }

    render() {
        return (
            <div>
                {this.state.weather ?
                    <main className="position">
                        <div className="position__information container">
                            <h2>{this.state.weather.name}</h2>
                            <h3>{Math.floor(this.state.weather.main.temp - 273.15)}°</h3>
                            <div className="position__information-prevision">
                                { {this.state.weatherForecast.daily.map((jour,index) => {
                                    return <div className="position__information-prevision-day">
                                        <h4>day : {index+1}</h4>
                                        <span>{Math.floor(jour.temp.day - 273.15) }°</span>
                                    </ul>
                                })} }
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