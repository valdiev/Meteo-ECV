import logo from './logo.svg';
import './assets/style/style.scss';
import './assets/style/loader.scss';
import './assets/style/search.scss';
import {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import {BsHouse} from "react-icons/bs";
import {RiStarSFill} from "react-icons/ri"
import {BsSearch} from "react-icons/bs"

function App() {
    return (
        <div className="main">
            <header>
                <nav className="menu">
                    <ul>
                        <li><Link className="link" to="/"><BsHouse style={{fontSize:"1.7rem"}}/></Link></li>
                        <div className="left">
                            <li><Link className="link" to="/favorite"><RiStarSFill style={{fontSize:"2em"}}/></Link></li>
                            <li><Link className="link" to="/search"><BsSearch style={{fontSize: '1.7rem'}}/></Link></li>
                        </div>
                    </ul>
                </nav>
                <Outlet/>
            </header>
            <Outlet/>
        </div>
    );
}

export default App;
