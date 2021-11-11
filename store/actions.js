import {LOGIN, REGISTER} from '../constants/redux';
import firebase from 'firebase/compat';

export const __login = (email, password) => {
    return async dispatch => {

        const {user} = await firebase.auth().signInWithEmailAndPassword(email, password);

        dispatch({
            type: LOGIN,
            payload: user.uid
        })
    }
}

export const __register = (email, password) => {
    return async dispatch => {
        const {user} = await firebase.auth().createUserWithEmailAndPassword(email, password);
        dispatch({
            type: REGISTER,
            payload: user.uid
        })
    }
}
