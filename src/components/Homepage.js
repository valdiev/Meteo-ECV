import React, { Component } from "react";
import meteoRepository from "../repository/meteoRepository";
import Loader from './Loader';
import App from "../App";
import Card from "./Card";


export default class Homepage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            weather: "",
            weatherForecast: "",
            ville: "",
            weatherByName: "",
            temp: "",
            search: false,

        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({ [value.target.name]: value.target.value })
    }
    async componentDidMount(){
        if ("geolocation" in navigator && this.state.search===false) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                this.setState({
                    ...this.state,
                    weather: await meteoRepository.getWeather(position.coords.latitude,position.coords.longitude),
                    weatherForecast: await meteoRepository.getWeatherOneCall(position.coords.latitude, position.coords.longitude)
                });
            });
        }
    }

    async submitForm() {
        try{
            this.setState({
                ...this.state,
                weather: await meteoRepository.getWeatherByCityName(this.state.ville),
                search: true,
            });
            this.setState({
                ...this.state,
                temp: this.state.weather.main.temp,
                weatherForecast: await meteoRepository.getWeatherOneCall(this.state.weather.coord.lat, this.state.weather.coord.lon)
            });
            this.state.ville = "";
            document.querySelector(".form__group").classList.remove("active");
        }
        catch (err){
            console.log(err);
            window.location.pathname="/"
            document.querySelector(".form__group").classList.remove("active");
        }
    }


    render() {
        return (
            <div>
                <div className="form__group field">
                    <input onKeyUp={(event) => { if(event.key === 'Enter') this.submitForm();}} autoComplete="off" type="text" className="form__field"  name="ville" id='ville' placeholder={this.state.ville} onChange={this.handleChange}
                           required/>
                    <label htmlFor="name" className="form__label">Choisissez une ville</label>
                    <button className="searchBtn" onClick={() => this.submitForm()}>Envoyer</button>
                </div>
                {this.state.weatherForecast ?
                    <Card name={this.state.weather.name} temp={this.state.weather.main.temp} weather={this.state.weather.weather[0].icon} listPrevisionDays={this.state.weatherForecast.daily} listPrevisionHours={this.state.weatherForecast.hourly}/>
                    : <Loader />
                }
            </div>
        );
    }
}