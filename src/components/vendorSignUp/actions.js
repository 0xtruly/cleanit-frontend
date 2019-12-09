import { actionTypes } from './actionTypes';

// Destructuring actionTypes
const {
    SIGNUP_REQUEST,
    SIGNUP_FAILURE,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    VERIFY_REQUEST,
    VERIFY_SUCCESS,
} = actionTypes;

/**
 * A SIGNUP request by the user
 *
 * @constant
 */
export const requestSignUp = () => ({ type: SIGNUP_REQUEST });

/**
 * This describes a case where there is a SIGNUP failure
 *
 * @constant
 * @param {string} error - The error message recieved if a SIGNUP request fails
 */
export const SignUpError = error => ({ error, type: SIGNUP_FAILURE });

/**
 * A logout request by the user
 *
 * @constant
 */
export const requestLogout = () => ({ type: LOGOUT_REQUEST });

/**
* Receive data from Firebase on successful logout
*
* @constant
* @param {Object} vendor - Sets the user object to null on successful logout.
*/
export const receiveLogout = vendor => ({ type: LOGOUT_SUCCESS, vendor });

/**
* This describes a case where there is a logout failure
*
* @constant
* @param {string} error - The error message recieved if a logout request fails
*/
export const logoutError = error => ({ error, type: LOGOUT_FAILURE });

/**
* This describes a verification process for a request
*
* @constant
*/
export const verifyRequest = () => ({ type: VERIFY_REQUEST });

/**
* This describes a verification process for a successful App-Firebase connection
*
* @constant
*/
export const verifySuccess = () => ({ type: VERIFY_SUCCESS });
