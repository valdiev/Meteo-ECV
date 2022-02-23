import React, { Component } from "react";
import getWeatherByCityName from "../repository/meteoByCityNameRepository";
import forecastMeteoRepository from "../repository/forecastMeteoRepository";
import {addFavorite} from "../store/reducers/favoriteReducer";
import { connect } from "react-redux";
import Card from "./Card";
import App from "../App";

class SearchbyName extends Component{
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
    submitFormFavorite = () => {
        this.props.addFavorite({ville: this.state.ville});
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
        // console.log(this.state.weatherForecast);
        this.state.ville = "";
    }



    render() {
        return (
            <div className="formulaire">
                <App/>
                <hr/>
                <div className="form_indiv">
                    <label htmlFor="nom">Ville</label>
                    <input type="text" id="ville" name="ville" value={this.state.ville} onChange={this.handleChange} required />
                </div>
                <button onClick={() => this.submitForm()}>Envoyer</button>
                {this.state.weatherByName ?
                    <Card name={this.state.weatherByName.name} temp={this.state.weatherByName.main.temp} weather={this.state.weatherByName.weather[0].icon} listPrevision={this.state.weatherForecast.daily}/>
                        : <h1>En attente d'une ville</h1>
                }
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addFavorite: (favorite) => dispatch(addFavorite(favorite))
    }
};

const mapStateToProps = state => {
    return {
        listOfFavorite: state.favorite.listOfFavorite
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchbyName);