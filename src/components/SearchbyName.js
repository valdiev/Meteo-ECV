import React, { Component } from "react";
import getWeatherByCityName from "../repository/meteoByCityNameRepository";
import forecastMeteoRepository from "../repository/forecastMeteoRepository";

export default class SearchbyName extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ville: '',
            weatherByName: '',
            weatherForecast: '',
            temp: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({ [value.target.name]: value.target.value })
    }

    async submitForm() {
        this.setState({
            ...this.state,
            weatherByName: await getWeatherByCityName.getWeatherByCityName(this.state.ville),
        });
        this.setState({
            ...this.state,
            temp: this.state.weatherByName.main.temp,
            weatherForecast: await forecastMeteoRepository.getWeather(this.state.weatherByName.coord.lat,this.state.weatherByName.coord.lon)
        });
        console.log(this.state.weatherForecast);
        this.state.ville = "";
    }



    render() {
        return (
            <div className="formulaire">
                <hr/>
                <div className="form_indiv">
                    <label htmlFor="nom">Ville</label>
                    <input type="text" id="ville" name="ville" value={this.state.ville} onChange={this.handleChange} required />
                </div>
                <button onClick={() => this.submitForm()}>Envoyer</button>
                {this.state.weatherByName ?
                    <div className="information">
                        <h1>{this.state.weatherByName.name}</h1>
                        <p>{Math.floor(this.state.temp - 273.15) } °</p>
                    </div>
                        : <p>Chargement</p>
                }
            </div>
        );
    }
}