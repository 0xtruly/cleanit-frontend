import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import actionTypes from './actionTypes';
import * as actions from './actions';
import * as firebase from '../../firebase';

const { SIGNIN_REQUEST } = actionTypes;

const { signInError, signInSuccess } = actions;

const { loginToFirebase } = firebase;
const LOGIN_API_URL = process.env.REACT_APP_USER_AUTH_API;

/**
 *
 * @param {object} payload
 * @function {function} vendorLogin
 */
function* vendorLogin({ payload }) {
    const { email, password } = payload;
    try {
        const { user } = yield loginToFirebase.auth().signInWithEmailAndPassword(email, password);
        const userInfo = { userAuth: user, userType: 'vendor' };
        const config = { headers: { 'Content-Type': 'application/json' } };
        const body = JSON.stringify(userInfo);
        const response = yield axios.post(LOGIN_API_URL, body, config);
        if (response.status === 200) {
            const {
                data: { info },
            } = response.data;
            yield put(signInSuccess(info));
        } else yield put(signInError(response.status));
    } catch (error) {
        yield put(signInError(error));
    }
}

export default function* vendorSigninSaga() {
    yield takeEvery(SIGNIN_REQUEST, vendorLogin);
}
