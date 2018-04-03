import firebase from 'firebase';
import { facebookProvider } from './../setupFirebase'

const SET_USER = 'auth/SET_USER';
const ERROR = 'auth/ERROR';

export const setUser = user => ({
    type: SET_USER,
    user
});

export const signIn = (email, password) => dispatch => {
    return firebase
        .auth().signInWithEmailAndPassword(email, password)
        .catch(error => dispatch({ type: ERROR, error}))
};

export const signUp = (email, password, userData) => dispatch => {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => dispatch({ type: ERROR, error}))
        .then(user => {
            firebase
                .database()
                .ref('/users/' + user.uid)
                .set(userData)
        })
};

export const signOut = () => dispatch => {
    firebase
        .auth().signOut()
        .catch(error => dispatch({ type: ERROR, error}))

};

export const authWithFacebook = () => dispatch => {
    firebase
        .auth().signInWithPopup(facebookProvider)
        .catch(error => dispatch({ type: ERROR, error}))
};

const initialState = {
    user: null,
    error: null
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            };
        case ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state
    }
}