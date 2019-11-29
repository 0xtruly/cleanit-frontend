import axios from 'axios';
import * as actionTypes from './actionTypes';

const {
    LOGIN_REQUEST, LOGIN_FAILURE, LOGOUT_FAILURE, LOGOUT_REQUEST,
    LOGOUT_SUCCESS, VERIFY_REQUEST, VERIFY_SUCCESS,
} = actionTypes;

/**
 * A login request by the user
 *
 * @constant
 */
export const requestLogin = () => ({ type: LOGIN_REQUEST });

/**
 * Receiving User Object from Firebase on successful login
 *
 * @constant
 * @param {Object} User - The user object received from firebase on login.
 */
<<<<<<< HEAD
export const receiveLogin = async user => {
    const fbfunction = process.env.REACT_APP_USER_AUTH_API;
    const userInfo = { userAuth: user, userType: 'user' };
    const config = { headers: { 'Content-Type': 'application/json' } };
    const body = JSON.stringify(userInfo);
    const res = await axios.post(fbfunction, body, config);
    return res.data.data.info;
};
=======

export const receiveLogin = user => ({ type: LOGIN_SUCCESS, user });
>>>>>>> setting up actions, reducers, actionTypes and thunks for the Login Component

/**
 * This describes a case where there is a login failure
 *
 * @constant
 * @param {string} error - The error message recieved if a login request fails
 */
<<<<<<< HEAD
export const loginError = error => ({ error, type: LOGIN_FAILURE });
=======

export const loginError = error => ({
    type: LOGIN_FAILURE, // eslint-disable-next-line sort-keys
    error,
});
>>>>>>> setting up actions, reducers, actionTypes and thunks for the Login Component

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
<<<<<<< HEAD
=======

>>>>>>> setting up actions, reducers, actionTypes and thunks for the Login Component
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
<<<<<<< HEAD
=======

>>>>>>> setting up actions, reducers, actionTypes and thunks for the Login Component
export const verifyRequest = () => ({ type: VERIFY_REQUEST });

/**
* This describes a verification process for a successful App-Firebase connection
*
* @constant
*/
<<<<<<< HEAD
=======

>>>>>>> setting up actions, reducers, actionTypes and thunks for the Login Component
export const verifySuccess = () => ({ type: VERIFY_SUCCESS });
