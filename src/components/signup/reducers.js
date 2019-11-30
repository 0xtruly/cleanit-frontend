import actionTypes from './actionTypes';

const initalState = {
    error: null,
    isRegistered: false,
    isRegistering: false,
    payload: null,
    success: null,
};

export default (state = initalState, { type, payload }) => {
    const {
        REGISTRATION_ERROR, REGISTRATION_SUCCESS,
        REQUEST_TO_REGISTER,
    } = actionTypes;

    switch (type) {
    case REQUEST_TO_REGISTER:
        return { ...state, isRegistering: true };

    case REGISTRATION_SUCCESS:
        return { ...state, isRegisered: true, success: payload };

    case REGISTRATION_ERROR:
        return { ...state, error: payload, isRegistering: false };

    default:
        return state;
    }
};
