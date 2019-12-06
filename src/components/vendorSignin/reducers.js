import { actionTypes } from './actionTypes';

const {
    LISTEN_FOR_INPUT,
    SIGNIN_ERROR,
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNOUT_REQUEST,
    SIGNOUT_SUCCESS,
} = actionTypes;

export const initialState = {
    email: '',
    isAuthenticated: false,
    isSignedIn: false,
    isSignedOut: false,
    isSigningIn: false,
    isSigningOut: false,
    isVerified: false,
    isVerifying: false,
    password: '',
    signinError: '',
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case LISTEN_FOR_INPUT: {
        const { key, value } = payload;
        return { ...state, [key]: value };
    }
    case SIGNIN_REQUEST:
        return { ...state, isSigningIn: true };
    case SIGNIN_SUCCESS:
        return { ...state, isSignedIn: true, isSigningIn: false };
    case SIGNIN_ERROR:
        return { ...state, isSignedIn: false, signinError: payload };
    case SIGNOUT_REQUEST:
        return { ...state, isSigningOut: true };
    case SIGNOUT_SUCCESS:
        return { ...state, isSignedOut: true, isSigningOut: false };
    default:
        return state;
    }
};
