import * as types from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
    createEmployeeFail: '', 
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        
        case types.EMPLOYEE_CREATE_FAIL:
            return { ...state, createEmployeeFail: action.payload };
        
        case types.EMPLOYEE_CREATE_SUCCESS:
            return { ...state, ...INITIAL_STATE };

        case types.CREATING_EMPLOYEE:
            return { ...state, loading: true };

        default:
            return state;
    }
};
