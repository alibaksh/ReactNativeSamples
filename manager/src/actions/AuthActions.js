import firebase from 'firebase';
import * as types from './types';

export const emailChanged = (text) => {
    return {
        type: types.EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: types.PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatchLoading(dispatch);
        firebase.auth().signOut().then(() => {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(user => dispatchLoginUserSuccess(dispatch, user))
                .catch((error) => {
                    console.log(error);
                    firebase.auth().createUserWithEmailAndPassword(email, password)
                        .then(user => dispatchLoginUserSuccess(dispatch, user))
                        .catch(() => dispatchLoginUserFail(dispatch));
                });
        });
    };
};

const dispatchLoginUserFail = (dispatch) => {
    dispatch({
        type: types.LOGIN_USER_FAIL,
        payload: 'Authentication Failed.'
    });
};

const dispatchLoading = (dispatch) => {
    dispatch({
        type: types.LOGIN_USER
    });
};

const dispatchLoginUserSuccess = (dispatch, user) => {
    dispatch({
        type: types.LOGIN_USER_SUCCESS,
        payload: user
    });
};
