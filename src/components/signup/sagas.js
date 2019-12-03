import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import actionTypes from './actionTypes';
import { signUpWithEmail } from '../../firebase';

const {
    REGISTER_WITH_EMAIL,
    REGISTRATION_ERROR,
    REGISTRATION_SUCCESS,
} = actionTypes;
const { REACT_APP_USER_SIGNUP_API } = process.env;
const api = REACT_APP_USER_SIGNUP_API;

/**
 *
 * @param {*} payload is destructured from data
 *the generator function userSignUpEmail is fired
 when ever the action REGISTER_WITH_EMAIL is dispatched
 */

function* userSignUpEmail({ payload }) {
    const { email, password } = payload;
    try {
        const { user } = yield signUpWithEmail(email, password);
        const userInfo = { userAuth: user, userType: 'user' };
        const config = { headers: { 'Content-Type': 'application/json' } };
        const body = JSON.stringify(userInfo);
        const request = yield axios.post(api, body, config);
        if (request.status === 200) {
            const { status } = request.data;
            yield put({ payload: status, type: REGISTRATION_SUCCESS });
        }
    } catch (error) {
        yield put({ payload: error, type: REGISTRATION_ERROR });
    }
}

export default function* signupSaga() {
    yield takeEvery(REGISTER_WITH_EMAIL, userSignUpEmail);
}
