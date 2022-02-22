import React, { Component } from "react";
import getWeatherByCityName from "../repository/meteoByCityNameRepository";

export default class SearchbyName extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ville: '',
            weatherByName: '',
            temp: ''
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
        console.log(this.state.weatherByName)
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

                <div className="information">
                    <h1>{this.state.weatherByName.name}</h1>
                </div>
            </div>
        );
    }
}