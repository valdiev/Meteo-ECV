import React, { Component } from "react";
import meteoRepository from "../repository/meteoRepository";
import Card from "./Card";
import App from "../App";

import Loader from './Loader';


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
    format(days,format) {
        if(format === "long") {
            let options = { weekday: 'long', month: 'long', day: 'numeric'}
            let currentDate = new Date();
            return this.addDaysToDate(currentDate, days).toLocaleDateString([],options);
        }
        else{
            let options = { weekday: 'long'}
            let currentDate = new Date();
            return this.addDaysToDate(currentDate, days).toLocaleDateString([],options);
        }
    }
    addDaysToDate(date, days) {
        var dt = new Date(date);
        dt.setDate(dt.getDate() + days);
        return dt;
    }
    async submitForm() {
        try{
            this.setState({
                ...this.state,
                weatherByName: await meteoRepository.getWeatherByCityName(this.state.ville),
            });
            this.setState({
                ...this.state,
                temp: this.state.weatherByName.main.temp,
                weatherForecast: await meteoRepository.getWeatherOneCall(this.state.weatherByName.coord.lat, this.state.weatherByName.coord.lon)
            });
            this.state.ville = "";
        }
        catch (err){
            return window.location.pathname="/search";
        }
    }


    render(){
        return (
            <div className="formulaire">
                { this.state.weatherByName ?
                    <Card recherche={true} name={this.state.weatherByName.name} temp={this.state.weatherByName.main.temp} weather={this.state.weatherByName.weather[0].icon} listPrevisionDays={this.state.weatherForecast.daily} listPrevisionHours={this.state.weatherForecast.hourly}/>
                    :
                    <div className="search_beginning">
                        <Loader />
                        <div className="form__group field">
                            <input onKeyUp={(event) => { if(event.key === 'Enter') this.submitForm();}} autoComplete="off" type="text" className="form__field"  name="ville" id='ville' placeholder={this.state.ville} onChange={this.handleChange}
                                   required/>
                            <label htmlFor="name" className="form__label">Choisissez une ville</label>
                            <button className="searchBtn" onClick={() => this.submitForm()}>Envoyer</button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}