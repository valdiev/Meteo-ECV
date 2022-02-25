import {Component} from "react";

export default class Modal extends Component{
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="modal">
                <p>{this.props.ville} a été {this.props.etat} favoris</p>
            </div>
        )
    }
}