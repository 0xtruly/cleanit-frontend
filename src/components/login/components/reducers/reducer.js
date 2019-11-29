/* eslint-disable max-lines-per-function */
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    VERIFY_REQUEST,
    VERIFY_SUCCESS
} from '../../actionTypes';

const initialState = {
    isAuthenticated: false,
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    loginError: '',
    logoutError: '',
    user: {},
};

export default (
    state = initialState, action
) => {
    switch (action.type) {
    case LOGIN_REQUEST:
        return {
            ...state,
            isLoggingIn: true,
            loginError: false,
        };
    case LOGIN_SUCCESS:
        return {
            ...state,
            isAuthenticated: true,
            isLoggingIn: false,
            user: action.user,
        };
    case LOGIN_FAILURE:
        return {
            ...state,
            isAuthenticated: false,
            isLoggingIn: false,
            loginError: action.error,
        };
    case LOGOUT_REQUEST:
        return {
            ...state,
            isLoggingOut: true,
            logoutError: false,
        };
    case LOGOUT_SUCCESS:
        return {
            ...state,
            isAuthenticated: false,
            isLoggingOut: false,
            user: {},
        };
    case LOGOUT_FAILURE:
        return {
            ...state,
            isLoggingOut: false,
            logoutError: action.error,
        };
    case VERIFY_REQUEST:
        return {
            ...state,
            isVerifying: true,
            verifyingError: false,
        };
    case VERIFY_SUCCESS:
        return {
            ...state,
            isVerifying: false,
        };
    default:
        return state;
    }
};

