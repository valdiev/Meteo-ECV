import SearchbyName from "../components/SearchbyName";
import {Component} from "react";
export default class Favorite extends Component{
    constructor(props) {
        super(props);
        this.state = {
            listOfFavorite: [],
        };
    }
    render() {
        return (
            <div className="listUsers">
                <p>list</p>
            </div>
        );
    }
}