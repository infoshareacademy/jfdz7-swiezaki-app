import { createStore, combineReducers } from 'redux';

import parts from './state/parts';

const reducer = combineReducers({
    parts
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;