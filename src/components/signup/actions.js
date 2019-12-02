import axios from 'axios';
import actionTypes from './actionTypes';

const {
    REGISTRATION_ERROR,
    REGISTRATION_SUCCESS,
} = actionTypes;

const { REACT_APP_USER_SIGNUP_API } = process.env;
const api = REACT_APP_USER_SIGNUP_API;

export const registerWithEmail = async payload => {
    const authApi = api;
    // return console.log(authApi)
    const userInfo = { userAuth: payload, userType: 'user' };
    const config = { headers: { 'Content-Type': 'application/json' } };
    const body = JSON.stringify(userInfo);

    try {
        const response = await axios.post(authApi, body, config);
        const { data: { info } } = response.data;
        return info;
    } catch (error) {
        return error;
    }
};

export const registrationSuccess = payload => ({
    payload,
    type: REGISTRATION_SUCCESS,
});

export const registrationError = payload => ({
    payload,
    type: REGISTRATION_ERROR,
});
