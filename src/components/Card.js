import React, { Component } from "react";
import { addFavorite } from "../store/reducers/favoriteReducer";
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
            menu: false,
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
    addHours(index) {
        // let currentDate = new Date();
        // return currentDate.getHours() + index;
        let currentDate = new Date(Date.now() + index * (3600*1000));
        let currentHours = currentDate.getHours();

        return currentHours
        
    }

    submitForm() {
        this.props.addFavorite({ ville: this.props.name, temp: this.props.temp, daily: this.props.listPrevisionDays, weather: this.props.weather });
        if(this.state.favON === false) {
            this.setState({
                favON: true,
            });
        }
        else{
            this.setState({
                favON: false,
            });
        }

    }
    render() {
        return (
            <main className="position">
                <App />
                <div className="position__information container">
                    <div className="addFav"><a onClick={() => this.submitForm()}>{ this.state.favON === false ?<RiStarSLine style={{fontSize:"2rem"}}/> : <RiStarSFill style={{fontSize:"2rem"}}/>}</a></div>
                    <div className="position__information-date">
                        <h2>{this.format(0, "long")}</h2>
                    </div>
                    <div className="position__information-city">
                        <h2>{this.props.name}</h2>
                        <h3>{Math.floor(this.props.temp)}°</h3>
                    </div>
                    <div className={ this.state.menu ? "position__information-prevision-week active" : "position__information-prevision-week"}>
                        {this.props.listPrevisionDays != null ? this.props.listPrevisionDays.slice(0, 5).map((jour, index) => {
                            return <div className="position__information-prevision-week-day">
                                <h4>{this.format(index + 1, "court")}</h4>
                                <span className="icon">
                                    <img src={`./img/svg/${jour.weather[0].icon}.svg`} />
                                </span>
                                <span>{Math.floor(jour.temp.day)}°</span>
                            </div>
                        }) : null}
                        <button onClick={() => this.setState({menu: !this.state.menu})}>Prévisions</button>
                    </div>
                    <div className="position__information-prevision">
                        {this.props.listPrevisionHours != null ? this.props.listPrevisionHours.slice(0, 6).map((hours, index) => {
                            return (
                                <div className="position__information-prevision-day">
                                    <h4>{this.addHours(index + 1)}:00</h4>
                                    <span className="icon">
                                    <picture>
                                        <source srcSet={`./img/svg/${hours.weather[0].icon}.svg`} media="(min-width:768px)"></source>
                                        <source srcSet={`./img/svg/white/${hours.weather[0].icon}.svg`} media="(max-width:767px)"></source>
                                        <img src={`./img/svg/${hours.weather[0].icon}.svg`} />
                                    </picture>
                                </span>
                                <span>{Math.floor(hours.temp)}°</span>
                                </div>
                            )
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
        addFavorite: (favorite) => dispatch(addFavorite(favorite))
    }
};

const mapStateToProps = state => {
    return {
        listOfFavorite: state.favorite.listOfFavorite
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);