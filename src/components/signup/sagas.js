import { put, takeEvery } from 'redux-saga/effects';
import actionTypes from './actionTypes';
import { registrationError, registrationSuccess } from './actions';
import apiRequest from './utils';
// import { STRINGS } from './constants';
// import axios from 'axios';

const { REQUEST_TO_REGISTER } = actionTypes;
// const { ENDPOINT } = STRINGS;

function* newUserRegistration({ payload }) {
    try {
        yield put({ type: REQUEST_TO_REGISTER });
        yield apiRequest(payload);
        yield put({ type: registrationSuccess });
    } catch (err) {
        yield put({ type: registrationError });
    }
}

export default function* userRegistrationAction() {
    yield takeEvery(REQUEST_TO_REGISTER, newUserRegistration);
}
