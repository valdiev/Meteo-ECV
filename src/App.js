import logo from './logo.svg';
import './assets/style/style.scss';
import './assets/style/loader.scss';
import './assets/style/modal.scss';
import './assets/style/search.scss';
import {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import {RiStarSFill} from "react-icons/ri"
import {BsSearch} from "react-icons/bs"

function App() {
    return (
        <div className="main">
            <header>
                <nav className="menu">
                    <ul>
                        <li><p onClick={(event) => {
                            document.querySelector(".form__group").classList.add("active")
                        }}>Recherche une ville</p></li>
                        <li><Link className="link" to="/favorite">Liste des favoris</Link></li>
                    </ul>
                </nav>
                <Outlet/>
            </header>
            <Outlet/>
        </div>
    );
}

export default App;
