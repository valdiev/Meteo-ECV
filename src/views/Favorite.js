import {Component} from "react";

export default class Favorite extends Component{
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
                {this.state.listOfFavorite.map((user) => {
                    return <p>deml</p>
                })}
            </main>
        );
    }
}