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

    render() {
        return (
            <main className="position">
                <div><p>{this.props.ville}</p>
                    <p>{this.props.temp}</p>
                    {this.props.daily.map((previ)=>{
                        return <p>{previ.temp.day}</p>
                    })}
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

export default connect(mapStateToProps, mapDispatchToProps)(CardFavorite);