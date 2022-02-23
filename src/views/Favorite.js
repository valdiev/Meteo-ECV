import {Component} from "react";
import {connect} from "react-redux";

class Favorite extends Component{
    constructor(props) {
        super(props);
        this.state = {
            listOfFavorite: [],
        };
    }

    componentDidMount = () => {
        this.setState({ listOfFavorite: this.props.listOfFavorite });
    }

    render() {
        return (
            <main>
                {this.state.listOfFavorite ? this.state.listOfFavorite.map((user) => {
                        return <p>{user.ville}</p>
                    }) : null }
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