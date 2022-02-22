import logo from './logo.svg';
import './assets/style.scss';
import meteoRepository from "./repository/meteoRepository";
import {useEffect, useState} from "react";

function App() {

  const [currentWeather,setCurrentWeather] = useState({});
  useEffect(async ()=>{
    const weather = await meteoRepository.currentWeather()
    setCurrentWeather(weather)
    console.log(weather)
  })
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>C'est abérrant</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
