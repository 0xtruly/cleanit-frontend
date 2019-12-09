/* eslint-disable max-lines-per-function */
import { actionTypes } from './actionTypes';
// Destructuring actionTYpes
const {
    INPUT_LISTEN,
    SIGNUP_REQUEST,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    VERIFY_REQUEST,
    VERIFY_SUCCESS,
} = actionTypes;

const initialState = {
    isAuthenticated: false,
    isLoggingIn: false,
    isLoggingOut: false,
    isVerified: false,
    isVerifying: false,
    logoutError: '',
    password: '',
    signUpError: '',
};

export default (
    state = initialState, action
) => {
    switch (action.type) {
    case INPUT_LISTEN:
    {
        const { key, value } = action.payload;
        return {
            ...state, [key]: value,
        }; }
    case SIGNUP_REQUEST:
        return {
            ...state, isLoggingIn: true, signUpError: false,
        };
    case SIGNUP_SUCCESS:
        return {
            ...state,
            email: '',
            isAuthenticated: true,
            isLoggingIn: false,
            password: '',
            vendorObj: action.payload,
        };
    case SIGNUP_FAILURE:
        return {
            ...state, isAuthenticated: false, isLoggingIn: false, signUpError: action.error,
        };
    case LOGOUT_REQUEST:
        return {
            ...state, isLoggingOut: true, logoutError: false,
        };
    case LOGOUT_SUCCESS:
        return {
            ...state, isAuthenticated: false, isLoggingOut: false, vendor: {},
        };
    case LOGOUT_FAILURE:
        return {
            ...state, isLoggingOut: false, logoutError: action.error,
        };
    case VERIFY_REQUEST:
        return {
            ...state, isVerifying: true, verifyingError: false,
        };
    case VERIFY_SUCCESS:
        return {
            ...state, isVerified: true, isVerifying: false,
        };
    default:
        return state;
    }
};
