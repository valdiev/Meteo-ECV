import React, { Component } from "react";
import { addFavorite } from "../store/reducers/favoriteReducer";
import { connect } from "react-redux";

class Card extends Component {
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

    submitForm() {
        console.log("j'appuie");
        this.props.addFavorite({ ville: this.props.name });
        console.log("je suis passé");
    }
    render() {
        return (
            <main className="position">
                <div className="position__information container">
                    {this.props.recherche === true ? <button onClick={() => this.submitForm()}>Ajouter aux favoris</button> : null}
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
        addFavorite: (favorite) => dispatch(addFavorite(favorite))
    }
};

const mapStateToProps = state => {
    return {
        listOfFavorite: state.favorite.listOfFavorite
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);