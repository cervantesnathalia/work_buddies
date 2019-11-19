import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './Components/App'
import ReactDOM from 'react-dom'
import serviceWorker from './serviceWorker';
import Auth from "./Auth";

const auth = new Auth();



let state = {};
window.setState = (changes) => {
    state = Object.assign({}, state, changes);

    ReactDOM.render((
        <BrowserRouter>
            <App {...state} logout/>
        </BrowserRouter>
    ), document.getElementById('root'));
}

/* eslint no-restricted-globals: 0 */
let initialState = {
    name: "Naty",
    location: location.pathname.replace(/^\/?|\/$/g,""),
    auth
}

window.setState(initialState)

serviceWorker(); 