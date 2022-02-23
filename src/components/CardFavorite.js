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
            <div>
                <div>
                    <p>{this.props.ville}</p>
                    <p>{this.props.temp}</p>
                    {this.props.daily ? this.props.daily.map((prevision,index)=>{
                        return <p>{prevision.temp.day}</p>
                    }) : null }
                </div>
            </div>
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