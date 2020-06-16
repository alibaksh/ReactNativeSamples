import * as types from '../actions/types';

const INITIAL_STATE = {
    employees: [],
    isLoading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.FETCH_EMPLOYEE_COMPLETE:
            return { ...state, employees: action.payload, isLoading: false };
        
        case types.FETCHING_EMPLOYEES:    
            return { ...state, isLoading: true };
            
        default:
            return state;
    }
};
