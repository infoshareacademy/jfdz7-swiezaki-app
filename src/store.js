import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './setupFirebase';
import auth from "./state/auth";
import parts from './state/parts';
import filters from './state/filters';


const reducer = combineReducers({
    auth,
    parts,
    filters
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk)));

export default store;