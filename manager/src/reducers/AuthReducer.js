import * as types from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    errorMessage: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.EMAIL_CHANGED:
            return { ...state, email: action.payload, errorMessage: '' };

        case types.PASSWORD_CHANGED:
            return { ...state, password: action.payload, errorMessage: '' };

        case types.LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload, email: '' };

        case types.LOGIN_USER_FAIL:
            return { ...state, errorMessage: action.payload, loading: false, password: '' };
        
        case types.LOGIN_USER:
            return { ...state, loading: true };

        default:
            return state;
    }
};
