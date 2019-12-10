import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { actionTypes } from './actionTypes';
import * as actions from './actions';

import { loginToFirebase } from '../../firebase';

// Destructuring actionTYpes
const {
    SIGNUP_REQUEST, SIGNUP_SUCCESS, VERIFY_REQUEST,
} = actionTypes;

// Destructuring Actions
const {
    signUpError, verifySuccess,
} = actions;

/**
 * This performs the SIGNUP request using sagas
 *
 * @function
 *
 * @param {string} email - Email inputed by the user
 * @param {string} fullName - Full Name of the new registrant
 * @param {string} password - Password inputed by the user
 */
function* signUpUser({ payload }) {
    const SIGNUP_API_URL = process.env.REACT_APP_USER_AUTH_API;
    const { email, name, password } = payload;
    try {
        const { user } = yield (loginToFirebase.auth()
            .createUserWithEmailAndPassword(email, password));
        const vendorInfo = { fullName: name, userAuth: user, userType: 'vendor' };
        const config = { headers: { 'Content-Type': 'application/json' } };
        const body = JSON.stringify(vendorInfo);
        const response = yield axios.post(SIGNUP_API_URL, body, config);
        if (response.status === 200) {
            const { data: { info } } = response.data;
            yield put({ payload: info, type: SIGNUP_SUCCESS });
        } else yield put(signUpError(response.status));
    } catch (error) {
        const { message } = error;
        yield put(signUpError(message));
    }
}

/**
 * This verifies that a user truly has signed in.
 *
 * @function
 */
function* verifyUserAuth() {
    try {
        const { user } = yield (loginToFirebase.auth().onAuthStateChanged());
        if (user !== null) {
            yield put({ payload: user, type: SIGNUP_SUCCESS });
        }
        yield put(verifySuccess());
    } catch (error) {
        const { message } = error;
        yield put(signUpError(message));
    }
}

/**
 * Exporting watch action for all functions
 *
 * @function
 */
export default function* watchVendorSignUpAction() {
    yield takeEvery(SIGNUP_REQUEST, signUpUser);
    yield takeEvery(VERIFY_REQUEST, verifyUserAuth);
}
