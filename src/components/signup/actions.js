import actionTypes from './actionTypes';

const {
    REGISTRATION_ERROR,
    REGISTRATION_SUCCESS,
    REQUEST_TO_REGISTER,
} = actionTypes;

export const requestToRegister = payload => ({
    payload,
    type: REQUEST_TO_REGISTER,
});

export const registrationSuccess = payload => ({
    payload,
    type: REGISTRATION_SUCCESS,
});

export const registrationError = payload => ({
    payload,
    type: REGISTRATION_ERROR,
});
