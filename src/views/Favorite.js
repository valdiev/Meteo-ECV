import { Component } from "react";
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
        items.forEach((item) => {
            item.classList.toggle("active");
        });
    }

    render() {
        return (
            <main className="favorite container">
                <div className="favorite__header">
                    <h1>Mes favoris</h1>
                    <button onClick={() => this.editFavorite()}>Edit</button>
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