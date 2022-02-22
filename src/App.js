import logo from './logo.svg';
import './assets/style/style.scss';
import {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";

function App() {
  return (
      <div className="main">
        <header>
          <div className="menu">
            <ul>
                <Link className="link" to="/homepage">HOMEPAGE</Link>
                <Link className="link" to="/search">Page recherche</Link>
                <Link className="link" to="/favorite">Mes favoris</Link>
            </ul>
          </div>
        </header>
        <Outlet/>
      </div>
  );
}

export default App;
