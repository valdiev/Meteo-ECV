import {Component} from "react";
import {connect} from "react-redux";
import CardFavorite from "../components/CardFavorite";

class Favorite extends Component{
    constructor(props) {
        super(props);
        this.state = {
            listOfFavorite: [{ville:"Lille",temp:12,daily:null}],
        };
    }

    componentDidMount = () => {
        this.setState({ listOfFavorite: this.props.listOfFavorite });
    }

    render() {
        return (
            <main>
                {this.state.listOfFavorite ? this.state.listOfFavorite.map((user,index) => {
                    console.log(user.daily)
                    return <CardFavorite ville={user.ville} temp={user.temp} daily={user.daily}/>
                }): null }
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