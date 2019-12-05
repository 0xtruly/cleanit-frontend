import { actionTypes } from './actionTypes';

// Destructuring actionTypes
const {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    VERIFY_REQUEST,
    VERIFY_SUCCESS,
} = actionTypes;

/**
 * A login request by the user
 *
 * @constant
 */
export const requestLogin = user => ({ type: LOGIN_REQUEST, user });

/**
 * This describes a case where there is a login failure
 *
 * @constant
 * @param {string} error - The error message recieved if a login request fails
 */
export const loginError = error => ({ error, type: LOGIN_FAILURE });

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
* @param {Object} User - Sets the user object to null on successful logout.
*/
export const receiveLogout = user => ({ type: LOGOUT_SUCCESS, user });

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
