/* eslint-disable max-lines-per-function */
import { actionTypes } from './actionTypes';
// Destructuring actionTYpes
const {
    INPUT_LISTEN,
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    REMEMBER_USER,
    VERIFY_REQUEST,
    VERIFY_SUCCESS,
} = actionTypes;

const initialState = {
    email: '',
    isAuthenticated: false,
    isLoggingIn: false,
    isLoggingOut: false,
    isVerified: false,
    isVerifying: false,
    loginError: '',
    logoutError: '',
    password: '',
    rememberUser: false,
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
    case LOGIN_REQUEST:
        return {
            ...state, isLoggingIn: true, loginError: false, user: action.payload,
        };
    case LOGIN_SUCCESS:
        return {
            ...state,
            email: '',
            isAuthenticated: true,
            isLoggingIn: false,
            password: '',
            user: action.payload,
        };
    case LOGIN_FAILURE:
        return {
            ...state, isAuthenticated: false, isLoggingIn: false, loginError: action.error,
        };
    case LOGOUT_REQUEST:
        return {
            ...state, isLoggingOut: true, logoutError: false,
        };
    case LOGOUT_SUCCESS:
        return {
            ...state, isAuthenticated: false, isLoggingOut: false, user: {},
        };
    case LOGOUT_FAILURE:
        return {
            ...state, isLoggingOut: false, logoutError: action.error,
        };
    case REMEMBER_USER:
        return {
            ...state, rememberUser: action.payload,
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

