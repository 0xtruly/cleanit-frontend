import { put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import actionTypes from './actionTypes';
import { signUpWithEmail } from '../../firebase';

const {
    REGISTER_WITH_EMAIL, REGISTRATION_ERROR, REGISTRATION_SUCCESS,
} = actionTypes;

const {
    registerWithEmail,
} = actions;

/**
 *
 * @param {*} payload is destructured from data
 *the generator function userSignUpEmail is fired
 when ever the action REGISTER_WITH_EMAIL is dispatched
 */

function* userSignUpEmail({ payload }) {
    try {
        const { user } = yield signUpWithEmail(payload.email, payload.password);
        const userDetails = yield registerWithEmail(user);
        yield put({ payload: userDetails, type: REGISTRATION_SUCCESS });
    } catch (error) {
        yield put({ type: REGISTRATION_ERROR });
    }
}

export default function* signupSaga() {
    yield takeEvery(REGISTER_WITH_EMAIL, userSignUpEmail);
}
