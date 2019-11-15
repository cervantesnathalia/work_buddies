import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './Components/App'
import ReactDOM from 'react-dom'
import serviceWorker from './serviceWorker';

let state = {};
window.setState = (changes) => {
    state = Object.assign({}, state, changes);

    ReactDOM.render((
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    ), document.getElementById('root'));
}

let initialState = {
    name: "Joel"
}

window.setState(initialState)

serviceWorker();