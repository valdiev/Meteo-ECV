import React, { Component } from "react";
import getWeatherByCityName from "../repository/meteoByCityNameRepository";
import forecastMeteoRepository from "../repository/forecastMeteoRepository";
import {addFavorite} from "../store/reducers/favoriteReducer";
import { connect } from "react-redux";
import Card from "./Card";

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
                    <main className="position">
                        <div className="position__information container">
                            <div className="position__information-date">
                                <h2>{this.format(0,"long")}</h2>
                            </div>
                            <div className="position__information-city">
                                <h2>{this.state.weatherByName.name}</h2>
                                <h3>{Math.floor(this.state.weatherByName.main.temp - 273.15)}°</h3>
                            </div>
                            <div className="position__information-prevision">
                                {/*{this.state.weatherForecast.daily.map((jour,index) => {*/}
                                {/*    return <div className="position__information-prevision-day">*/}
                                {/*        <h4>{this.format(index+1,"court")}</h4>*/}
                                {/*        <span>{Math.floor(jour.temp.day - 273.15) }°</span>*/}
                                {/*    </div>*/}
                                {/*})}*/}
                            </div>
                        </div>
                        <div className="position__image" style={{backgroundImage: `url(/img/${this.state.weatherByName.weather[0].icon}.jpg)`}}>
                        </div>
                    </main>
                        : <p>Chargement</p>
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