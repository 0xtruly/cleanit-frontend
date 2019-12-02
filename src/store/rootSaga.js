import { all, fork } from 'redux-saga/effects';
import { signupSaga } from '../components/signup';

export default function* rootSaga() {
    yield all([fork(signupSaga)]);
}
