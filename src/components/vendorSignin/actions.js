import { actionTypes } from './actionTypes';

const {
    LISTEN_FOR_INPUT,
    SIGNIN_ERROR,
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNOUT_REQUEST,
    SIGNOUT_SUCCESS,
    VERIFICATION_REQUEST,
    VERIFICATION_SUCCESS,
} = actionTypes;

/**
 * Request to signin vendor
 */
export const signInRequest = () => ({ type: SIGNIN_REQUEST });

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
export const signInError = error => ({ error, type: SIGNIN_ERROR })