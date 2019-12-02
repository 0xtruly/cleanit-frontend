import { all, fork } from 'redux-saga/effects';
import watchUserLoginAction from '../components/signin';

export default function* rootSaga() {
    yield all([fork(watchUserLoginAction)]);
}
