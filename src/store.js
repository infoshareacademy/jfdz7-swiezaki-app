import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import firebase from 'firebase';
import './setupFirebase';
import auth, { setUser } from "./state/auth";
import parts from './state/parts';
import filters from './state/filters';
import favourites from './state/favourites';
import product from './state/product';


const reducer = combineReducers({
    auth,
    parts,
    filters,
    favourites,
    product
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk)));

firebase.auth().onAuthStateChanged(user => {
    store.dispatch(setUser(user))
});

store.subscribe(() => {
    const currentFavPartsIDs = store.getState().favourites.favPartsIDs;
    localStorage.setItem('carPartsBrowserFavParts', JSON.stringify(currentFavPartsIDs));
});

export default store;