import React, { Component } from "react";
import {addFavorite, deleteFavorite} from "../store/reducers/favoriteReducer";
import { connect } from "react-redux";
import App from "../App";
import {RiStarSLine,RiStarSFill} from "react-icons/ri";
import meteoRepository from "../repository/meteoRepository";


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfFavorite: [],
            favON : false,
        }

    }

    format(days, format) {
        if (format === "long") {
            let options = { weekday: 'long', month: 'long', day: 'numeric' }
            let currentDate = new Date();
            return this.addDaysToDate(currentDate, days).toLocaleDateString([], options);
        }
        else {
            let options = { weekday: 'long' }
            let currentDate = new Date();
            return this.addDaysToDate(currentDate, days).toLocaleDateString([], options);
        }
    }
    addDaysToDate(date, days) {
        var dt = new Date(date);
        dt.setDate(dt.getDate() + days);
        return dt;
    }

    submitForm() {
        this.props.addFavorite({ ville: this.props.name, temp: this.props.temp, daily: this.props.listPrevision, weather: this.props.weather });
        this.setState({
            favON: true,
        });
    }
    deleteClick(){
        this.setState({
            favON: false,
        });
        let currentVille = this.props.name;
        let index = 0;
        this.state.listOfFavorite.forEach(function(items,i){
            if(currentVille === items.ville){
                index = i;
            }
        })
        this.props.deleteFavorite(index);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.listOfFavorite !== this.props.listOfFavorite){
            this.setState({
                listOfFavorite : this.props.listOfFavorite
            })
            return true
        }
        return false
    }

    render() {
        return (
            <main className="position">
                <App />
                <div className="position__information container">
                    <div className="addFav">
                        { this.state.favON === false ?
                            <a onClick={() => this.submitForm()}><RiStarSLine style={{fontSize:"2rem"}}/></a>
                            : <a onClick={() => this.deleteClick()}><RiStarSFill style={{fontSize:"2rem"}}/></a>}
                    </div>
                    <div className="position__information-date">
                        <h2>{this.format(0, "long")}</h2>
                    </div>
                    <div className="position__information-city">
                        <h2>{this.props.name}</h2>
                        <h3>{Math.floor(this.props.temp)}°</h3>
                    </div>
                    <div className="position__information-prevision">
                        {this.props.listPrevision != null ? this.props.listPrevision.map((jour, index) => {
                            return <div className="position__information-prevision-day">
                                <h4>{this.format(index + 1, "court")}</h4>
                                <span className="icon">
                                    <picture>
                                        <source srcSet={`./img/svg/${jour.weather[0].icon}.svg`} media="(min-width:768px)"></source>
                                        <source srcSet={`./img/svg/white/${jour.weather[0].icon}.svg`} media="(max-width:767px)"></source>
                                        <img src={`./img/svg/${jour.weather[0].icon}.svg`} />
                                    </picture>
                                </span>
                                <span>{Math.floor(jour.temp.day)}°</span>
                            </div>
                        }) : null}
                    </div>
                </div>
                <div className="position__image" style={{ backgroundImage: `url(/img/${this.props.weather}.jpg)` }}>
                </div>
            </main>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addFavorite: (favorite) => dispatch(addFavorite(favorite)),
        deleteFavorite: (favorite) => dispatch(deleteFavorite(favorite))
    }
};

const mapStateToProps = state => {
    return {
        listOfFavorite: state.favorite.listOfFavorite
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);