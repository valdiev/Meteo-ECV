import React, { Component } from "react";
import { connect } from "react-redux";
import CardFavorite from "../components/CardFavorite";
import App from "../App";

import '../assets/style/cardFavorite.scss';

class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfFavorite: [],
            editFav : false,
        };
    }

    componentDidMount = () => {
        this.setState({ listOfFavorite: this.props.listOfFavorite });
    }

    format(days, format) {
            let options = { weekday: 'long', month: 'long', day: 'numeric' }
            return new Date().toLocaleDateString([], options);

    }

    deleteFavorite = (id) => {
        let array = [...this.state.listOfFavorite];
        this.state.listOfFavorite.forEach((favorite,index) => {

            if(favorite.ville == id) {
                console.log(index)
                const result = array.filter(item => item.ville != favorite.ville)
                array = result
            }
        })

        this.setState({
            listOfFavorite: array
        })
    }
    render() {
        return (
            <main className={this.state.editFav === true ? "favorite container favorite_container active": "favorite container favorite_container" }>
                <App />
                <div className="favorite__header">
                    <h2 className="fav">Mes favoris</h2>
                    <h2>{this.format(0,"long")}</h2>
                    <button className="btn_edit" onClick={() => this.setState({
                editFav : !this.state.editFav,})}>Modifier mes favoris</button>
                </div>
                <section className="favorite__grid">
                    {this.state.listOfFavorite ? this.state.listOfFavorite.map((user, index) => {
                        return <CardFavorite ville={user.ville} temp={user.temp} daily={user.daily} weather={user.weather} deleteClick={this.deleteFavorite.bind(this, user.ville)}/>
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