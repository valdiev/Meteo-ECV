import React, { Component } from "react";
import { connect } from "react-redux";
import CardFavorite from "../components/CardFavorite";
import App from "../App";

import '../assets/style/cardFavorite.scss';

class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfFavorite: [{ ville: "Lille", temp: 12, daily: null }],
        };
    }

    componentDidMount = () => {
        this.setState({ listOfFavorite: this.props.listOfFavorite });
    }

    editFavorite() {
        let items = document.querySelectorAll(".favorite__grid .favorite__grid-information");
        let btnEdit = document.querySelector(".favorite__header .btn_edit");
        items.forEach((item) => {
            item.classList.toggle("active");
            btnEdit.classList.toggle("active");
            if (btnEdit.classList.contains("active")) {
                btnEdit.innerHTML = "Confirmer mes modifications"
            }
            else{
                btnEdit.innerHTML = "Modifier mes favoris"
            }
        });
    }

    format(days, format) {
            let options = { weekday: 'long', month: 'long', day: 'numeric' }
            return new Date().toLocaleDateString([], options);

    }
    render() {
        return (
            <main className="favorite container favorite_container">
                <App />
                <div className="favorite__header">
                    <h2 className="fav">Mes favoris</h2>
                    <h2>{this.format(0,"long")}</h2>
                    <button className="btn_edit" onClick={() => this.editFavorite()}>Modifier mes favoris</button>
                </div>
                <section className="favorite__grid">
                    {this.state.listOfFavorite ? this.state.listOfFavorite.map((user, index) => {
                        console.log(user.daily)
                        console.log(this.state.listOfFavorite)
                        return <CardFavorite ville={user.ville} temp={user.temp} daily={user.daily} weather={user.weather} />
                    }) : null}
                </section>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        listOfFavorite: state.favorite.listOfFavorite
    }
}

export default connect(mapStateToProps)(Favorite)