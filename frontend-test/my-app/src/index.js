// import React from 'react'
// import {render} from 'react-dom'
// import App from './Components/App'
// import { BrowserRouter } from 'react-router-dom';

// // render(<App />, document.getElementById('root'))





// render((
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>
// ), document.getElementById('root'));


import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './Components/App'

render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));