import React, { Component } from "react";
import { addFavorite, deleteFavorite } from "../store/reducers/favoriteReducer";
import { connect } from "react-redux";

class CardFavorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfFavorite: [],
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
        let currentDate = new Date(Date.now() + index * (3600 * 1000));
        let currentHours = currentDate.getHours();

        return currentHours
    }

    deleteClick(index) {
        this.props.deleteFavorite(index);
    }

    render() {
        return (
            <article className="favorite__grid-information container">
                <div className="favorite__grid-information-city">
                    <h2>{this.props.ville}</h2>
                    <h3>{Math.floor(this.props.temp)}°</h3>
                </div>

                <div style={{ overflow: "hidden" }}>
                    <div className={this.props.slide ? "favorite__grid-information-container slide" : "favorite__grid-information-container"}>
                        <div className="favorite__grid-information-prevision-week">
                            {this.props.hourly ? this.props.hourly.map((hour, index) => {
                                return (
                                    <div key={index} className="favorite__grid-information-prevision-day">
                                        <h4>{this.addHours(index + 1)}:00</h4>
                                        <span className="icon">
                                            <img src={`./img/svg/white/${hour.weather[0].icon}.svg`} />
                                        </span>
                                        <span>{Math.floor(hour.temp)}°</span>
                                    </div>
                                )
                            }) : null}
                        </div>
                        <div className="favorite__grid-information-prevision">
                            {this.props.daily ? this.props.daily.map((jour, index) => {
                                return <div key={index} className="favorite__grid-information-prevision-day">
                                    <h4>{this.format(index + 1, "court")}</h4>
                                    <span className="icon">
                                        <img src={`./img/svg/white/${jour.weather[0].icon}.svg`} />
                                    </span>
                                    <span>{Math.floor(jour.temp.day)}°</span>
                                </div>
                            }) : null}
                        </div>
                    </div>
                </div>

                <div className="favorite__grid-information-image" style={{ backgroundImage: `url(/img/${this.props.weather}.jpg)` }}></div>
                <button className="delete-btn" onClick={() => this.deleteClick(this.props.index)}>X</button>
            </article>
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

export default connect(mapStateToProps, mapDispatchToProps)(CardFavorite);