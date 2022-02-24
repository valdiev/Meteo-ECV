import React, { Component } from "react";
import { addFavorite } from "../store/reducers/favoriteReducer";
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

    deleteFavorite = () => {
        // console.log("Delete button");
        this.props.deleteClick();
    }


    render() {
        return (
            <article className="favorite__grid-information container">
                <div className="favorite__grid-information-city">
                    <h2>{this.props.ville}</h2>
                    <h3>{Math.floor(this.props.temp)}°</h3>
                </div>

                <div className="favorite__grid-information-prevision">
                    {this.props.daily ? this.props.daily.map((jour, index) => {
                        return <div className="favorite__grid-information-prevision-day">
                            <h4>{this.format(index + 1, "court")}</h4>
                            <span className="icon">
                                <img src={`./img/svg/white/${jour.weather[0].icon}.svg`} />
                            </span>
                            <span>{Math.floor(jour.temp.day)}°</span>
                        </div>
                    }) : null}
                </div>
                <div className="favorite__grid-information-image" style={{ backgroundImage: `url(/img/${this.props.weather}.jpg)` }}></div>
                <button className="delete-btn" onClick={this.deleteFavorite}>X</button>
            </article>
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

export default connect(mapStateToProps, mapDispatchToProps)(CardFavorite);