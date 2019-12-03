import actionTypes from './actionTypes';

const {
    REGISTRATION_ERROR,
    REGISTRATION_SUCCESS,
} = actionTypes;

export const registrationSuccess = payload => ({
    payload,
    type: REGISTRATION_SUCCESS,
});

export const registrationError = payload => ({
    payload,
    type: REGISTRATION_ERROR,
});
