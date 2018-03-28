import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';


import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

import './css/favourites.css';

import Auth from '../src/components/Authorisation/Auth'
import App from './components/App';
import store from './store';

ReactDOM.render(
    <Provider store={ store }>
        <Auth>
            <Router>
                <App />
            </Router>
        </Auth>
    </Provider>,
    document.getElementById('root')

);
registerServiceWorker();
