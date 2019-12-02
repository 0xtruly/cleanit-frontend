import { actionTypes } from './actionTypes';
import * as actions from './actions';

// eslint-disable-next-line import/order
import { call, put, takeEvery } from 'redux-saga/effects';

import { loginToFirebase } from '../../firebase';

// Destructuring actionTYpes
const {
    LOGIN_REQUEST, LOGIN_SUCCESS, VERIFY_REQUEST, LOGOUT_REQUEST,
} = actionTypes;

// Destructuring Actions
const {
    loginError, receiveLogin, receiveLogout, logoutError, verifySuccess,
} = actions;
/**
 * This performs the login request using sagas
 *
 * @function
 *
 * @param {string} email - Email inputed by the user
 * @param {string} password - Password inputed by the user
 */
function* loginUser({ payload }) {
    try {
        const { user } = yield (loginToFirebase.auth()
            .signInWithEmailAndPassword(payload.email, payload.password));
        const userDetails = yield receiveLogin(user);
        yield put({ payload: userDetails, type: LOGIN_SUCCESS });
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
        const data = yield call(loginToFirebase.auth().signOut());
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
        const user = yield call(loginToFirebase.auth().onAuthStateChanged());
        if (user !== null) {
            yield put(receiveLogin(user));
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
export default function* watchUserLoginAction() {
    yield takeEvery(LOGIN_REQUEST, loginUser);
    yield takeEvery(LOGOUT_REQUEST, logoutUser);
    yield takeEvery(VERIFY_REQUEST, verifyUserAuth);
}
