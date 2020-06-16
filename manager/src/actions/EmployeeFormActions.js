import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import * as types from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: types.EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        dispatchLoading(dispatch);
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => {
            Actions.pop();
            dispatchCreateEmployeeSuccess(dispatch);
        })
        .catch(error => {
            dispatchCreateUserWithFail(dispatch, error);
        });
    };
};

const dispatchCreateUserWithFail = (dispatch, error) => {
    dispatch({
        type: types.EMPLOYEE_CREATE_FAIL,
        payload: error
    });
};

const dispatchCreateEmployeeSuccess = (dispatch) => {
    dispatch({
        type: types.EMPLOYEE_CREATE_SUCCESS
    });
};

const dispatchLoading = (dispatch) => {
    dispatch({
        type: types.CREATING_EMPLOYEE
    });
};
