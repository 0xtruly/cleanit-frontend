import actionTypes from './actionTypes';

const {
    LISTEN_FOR_INPUT,
    REMEMBER_ME,
    SIGNIN_ERROR,
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNOUT_REQUEST,
    SIGNOUT_SUCCESS,
    VERIFICATION_REQUEST,
    VERIFICATION_SUCCESS,
} = actionTypes;

/**
 *
 * @param {string} payload user input
 */
export const listenForInput = payload => ({
    payload,
    type: LISTEN_FOR_INPUT,
});

/**
 * Request to signin vendor
 */
export const signInRequest = payload => ({ payload, type: SIGNIN_REQUEST });

/**
 *
 * @param {string} payload the string in the
 * user object gotten
 * from a succesful login request.
 */
export const signInSuccess = payload => ({ payload, type: SIGNIN_SUCCESS });

/**
 *
 * @param {string} error the error gotten from
 * a failed signin request
 */
export const signInError = error => ({ error, type: SIGNIN_ERROR });

/**
 *
 * @param {string} payload session token from user object
 */
export const signOutRequest = payload => ({ payload, type: SIGNOUT_REQUEST });

/**
 *
 * @param {string} payload
 */
export const signOutSuccess = payload => ({ payload, type: SIGNOUT_SUCCESS });

/**
 *
 * @param {string} payload
 */
export const verificationRequest = payload => ({
    payload,
    type: VERIFICATION_REQUEST,
});

/**
 *
 * @param {string} payload
 */
export const verificationSuccess = payload => ({
    payload,
    type: VERIFICATION_SUCCESS,
});

export const rememberMe = payload => ({ payload, type: REMEMBER_ME });
