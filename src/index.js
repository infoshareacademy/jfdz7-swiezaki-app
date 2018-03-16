import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';


import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import store from './store';


ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')

);
registerServiceWorker();
