import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import firebase from 'firebase';
import './setupFirebase';
import auth, { setUser } from "./state/auth";
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

firebase.auth().onAuthStateChanged(user => {
    store.dispatch(setUser(user))
});

export default store;