import { actionTypes } from './actionTypes';

// Destructuring actionTypes
const {
    SIGNUP_REQUEST,
    SIGNUP_FAILURE,
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
export const signUpError = error => ({ error, type: SIGNUP_FAILURE });

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
