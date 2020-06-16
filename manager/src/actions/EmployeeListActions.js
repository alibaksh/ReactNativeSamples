import firebase from 'firebase';
import * as types from './types';

export const fetchEmployeeList = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        dispatchLoading(dispatch);
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
            const employees = [];
            snapshot.forEach((childSnapshot) => {
                const item = childSnapshot.val();
                item.key = childSnapshot.key;
        
                employees.push(item);
            });
            dispatchFetchComplete(dispatch, employees);
        });
    };
};

const dispatchFetchComplete = (dispatch, employees = []) => {
    dispatch({
        type: types.FETCH_EMPLOYEE_COMPLETE,
        payload: employees
    });
};

const dispatchLoading = (dispatch) => {
    dispatch({
        type: types.FETCHING_EMPLOYEES
    });
};

