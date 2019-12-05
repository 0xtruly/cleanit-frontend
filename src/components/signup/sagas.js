import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import actionTypes from './actionTypes';
import * as actions from './actions';
import { signUpWithEmail } from '../../firebase';

const { REGISTER_WITH_EMAIL } = actionTypes;

const { registrationError, registrationSuccess } = actions;
const { REACT_APP_USER_SIGNUP_API } = process.env;
const api = REACT_APP_USER_SIGNUP_API;

/**
 *
 * @param {object} payload is destructured from data
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
            yield put(registrationSuccess(status));
        }
    } catch (error) {
        const { message } = error;
        yield put(registrationError(`${message} you might need to try again.`));
    }
}

export default function* signupSaga() {
    yield takeEvery(REGISTER_WITH_EMAIL, userSignUpEmail);
}
