import actionTypes from './actionTypes';

const {
    GET_INPUT,
    REGISTER_WITH_EMAIL,
    REGISTRATION_ERROR,
    REGISTER_WITH_GOOGLE,
    REGISTRATION_SUCCESS,
} = actionTypes;

export const registerWithEmail = payload => ({
    payload,
    type: REGISTER_WITH_EMAIL,
});

export const registrationSuccess = payload => ({
    payload,
    type: REGISTRATION_SUCCESS,
});

export const registrationError = payload => ({
    payload,
    type: REGISTRATION_ERROR,
});

export const getInput = payload => ({
    payload,
    type: GET_INPUT,
});

export const registerWithGoogle = payload => ({
    payload,
    type: REGISTER_WITH_GOOGLE,
});