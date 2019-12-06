import actionTypes from './actionTypes';

const initalState = {
    email: '',
    error: null,
    isRegistered: false,
    isRegistering: false,
    name: '',
    password: '',
    success: null,
    userObj: null,
};

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
        return { ...state, email: '', isRegistered: true, isRegistering: false, name: '', password: '', success: payload };

    case REGISTRATION_ERROR:
        return { ...state, error: payload, isRegistering: false };

    default:
        return state;
    }
};
