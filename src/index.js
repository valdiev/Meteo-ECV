import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from "./views/Home";
import Favorite from "./views/Favorite";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import store from "./store/store";
import {Provider} from "react-redux";

const rootElement = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="favorite" element={<Favorite />}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
