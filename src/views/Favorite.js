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
            <main className={this.state.editFav === true ? "favorite container favorite_container active": "favorite container favorite_container" }>
                <App />
                <div className="favorite__header">
                    {this.state.listOfFavorite.length !== 0 ? <div>
                    <h2 className="fav">Mes favoris</h2>
                    <h2>{this.format(0,"long")}</h2>
                    <button className="btn_edit" onClick={() => this.setState({
                editFav : !this.state.editFav,})}>Modifier mes favoris</button></div> : <div>
                        <h2 className="fav">Vous n'avez pas de favoris</h2>
                        <h2>{this.format(0,"long")}</h2>
                        <a className="btn_edit" href="/search">Rechercher une ville</a></div> }
                </div>
                <section className="favorite__grid">
                    {this.state.listOfFavorite.length !== 0 ? this.state.listOfFavorite.map((user, index) => {
                        return <CardFavorite index={index} key={index} ville={user.ville} temp={user.temp} daily={user.daily} weather={user.weather} />
                    }) : null
                    }
                </section>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        listOfFavorite: state.favorite.listOfFavorite,
    }
}

export default connect(mapStateToProps)(Favorite)