import { put, takeEvery } from 'redux-saga/effects';
import actionTypes from './actionTypes';
import { registrationError, registrationSuccess } from './actions';
import createNewUserAccount from './utils';

const { REQUEST_TO_REGISTER } = actionTypes;

function* newUserRegistration({ payload }) {
    try {
        yield put({ type: REQUEST_TO_REGISTER });
        yield createNewUserAccount(payload);
        yield put({ type: registrationSuccess });
    } catch (err) {
        yield put({ type: registrationError });
    }
}

export default function* userRegistrationAction() {
    yield takeEvery(REQUEST_TO_REGISTER, newUserRegistration);
}
