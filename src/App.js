import logo from './logo.svg';
import './assets/style.scss';
import meteoRepository from "./repository/meteoRepository";
import {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";

function App() {
  return (
      <div className="main">
        <header>
          <div className="Logo">
            <p>Logo</p>
          </div>
          <div className="menu">
            <ul>
              <Link className="link" to="/homepage">Current Weather</Link>
            </ul>
          </div>
        </header>
        <Outlet/>
      </div>
  );
}

export default App;
