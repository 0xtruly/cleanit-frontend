import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_FAILURE, LOGOUT_REQUEST,
    LOGOUT_SUCCESS, VERIFY_REQUEST, VERIFY_SUCCESS
} from './actionTypes';

/**
 * A login request by the user
 *
 * @constant
 */
export const requestLogin = () => ({
    type: LOGIN_REQUEST,
});

/**
 * Receiving User Object from Firebase on successful login
 *
 * @constant
 */

export const receiveLogin = user => ({
    type: LOGIN_SUCCESS,
    user,
});

/**
 * This describes a case where there is a login failure
 *
 * @constant
 */

export const loginError = error => ({
    type: LOGIN_FAILURE,
    // eslint-disable-next-line sort-keys
    error,
});

/**
 * A logout request by the user
 *
 * @constant
 */
export const requestLogout = () => ({
    type: LOGOUT_REQUEST,
});

/**
* Receive data from Firebase on successful logout
*
* @constant
*/

export const receiveLogout = user => ({
    type: LOGOUT_SUCCESS,
    user,
});

/**
* This describes a case where there is a logout failure
*
* @constant
*/

export const logoutError = error => ({
    type: LOGOUT_FAILURE,
    // eslint-disable-next-line sort-keys
    error,
});

/**
* This describes a verification process for a request
*
* @constant
*/

export const verifyRequest = () => ({
    type: VERIFY_REQUEST,
});

/**
* This describes a verification process for a successful App-Firebase connection
*
* @constant
*/

export const verifySuccess = () => ({
    type: VERIFY_SUCCESS,
});
