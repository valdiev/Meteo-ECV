import React, { Component } from "react";
import {addFavorite, deleteFavorite} from "../store/reducers/favoriteReducer";
import { connect } from "react-redux";
import App from "../App";
import {RiStarSLine,RiStarSFill} from "react-icons/ri";
import Modal from "./Modal";


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfFavorite: [],
            favON : false,
            menu: false,
            etat: "",
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
        let modal = document.querySelector(".modal")
        this.setState({
            favON: true,
            etat: "ajoutée aux",
        });
        this.props.addFavorite({ ville: this.props.name, temp: this.props.temp, daily: this.props.listPrevisionDays, weather: this.props.weather, alreadyFav : this.state.favON });
        modal.classList.add("active");
        setTimeout(()=>{
            modal.classList.remove("active");
            },3000
        );
    }
    addHours(index) {
        let currentDate = new Date(Date.now() + index * (3600*1000));
        let currentHours = currentDate.getHours();
        return currentHours
    }
    deleteClick(){
        this.setState({
            favON: false,
            etat: "supprimé des favoris"
        });
        let currentVille = this.props.name;
        let index = 0;
        this.state.listOfFavorite.forEach(function(items,i){
            if(currentVille === items.ville){
                index = i;
            }
        })
        this.props.deleteFavorite(index);
        let modal = document.querySelector(".modal")
        modal.classList.add("active");
        setTimeout(()=>{
                modal.classList.remove("active");
            },3000
        );
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
                <App searchBar={this.props.searchBar} />
                <div className="position__information container">
                    <Modal ville={this.props.name} etat={this.state.etat}/>
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