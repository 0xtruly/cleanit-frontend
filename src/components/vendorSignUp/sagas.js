import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { actionTypes } from './actionTypes';
import * as actions from './actions';

import { loginToFirebase } from '../../firebase';

// Destructuring actionTYpes
const {
    SIGNUP_REQUEST, SIGNUP_SUCCESS, VERIFY_REQUEST, LOGOUT_REQUEST,
} = actionTypes;

// Destructuring Actions
const {
    loginError, receiveLogout, logoutError, verifySuccess,
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
    try {
        const { vendor } = yield (loginToFirebase.auth()
            .signInWithEmailAndPassword(payload.email, payload.password));
        const vendorInfo = { fullName: payload.fullName, userAuth: vendor, userType: 'vendor' };
        const config = { headers: { 'Content-Type': 'application/json' } };
        const body = JSON.stringify(vendorInfo);
        const response = yield axios.post(SIGNUP_API_URL, body, config);
        if (response.status === 200) {
            const { data: { info } } = response.data;
            yield put({ payload: info, type: SIGNUP_SUCCESS });
        } else yield put(loginError(response.status));
    } catch (error) {
        yield put(loginError(error));
    }
}

/**
 * This performs the logout request using sagas
 *
 * @function
 */
function* logoutUser() {
    try {
        const data = yield (loginToFirebase.auth().signOut());
        yield put(receiveLogout(data));
    } catch (error) {
        yield put(logoutError(error));
    }
}

/**
 * This verifies that a user truly has signed in.
 *
 * @function
 */
function* verifyUserAuth() {
    try {
        const { vendor } = yield (loginToFirebase.auth().onAuthStateChanged());
        if (vendor !== null) {
            yield put({ payload: vendor, type: SIGNUP_SUCCESS });
        }
        yield put(verifySuccess());
    } catch (error) {
        yield put(loginError(error));
    }
}

/**
 * Exporting watch action for all functions
 *
 * @function
 */
export default function* watchVendorSignUpAction() {
    yield takeEvery(SIGNUP_REQUEST, signUpUser);
    yield takeEvery(LOGOUT_REQUEST, logoutUser);
    yield takeEvery(VERIFY_REQUEST, verifyUserAuth);
}
