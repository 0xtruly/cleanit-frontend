import { initalState } from './initialState';
import actionTypes from './actionTypes';

const {
    GET_INPUT,
    REGISTER_WITH_EMAIL,
    REGISTRATION_ERROR,
    REGISTRATION_SUCCESS,
} = actionTypes;

export default (state = initalState, { type, payload }) => {
    switch (type) {
    case GET_INPUT: {
        const { key, value } = payload;
        return { ...state, [key]: value };
    }
    case REGISTER_WITH_EMAIL:
        return { ...state, isRegistering: true };
    case REGISTRATION_SUCCESS:
        return {
            ...state, isRegistered: true, isRegistering: false, success: payload,
        };
    case REGISTRATION_ERROR:
        return { ...state, error: payload, isRegistering: false };
    default:
        return state;
    }
};
