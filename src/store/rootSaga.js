import { all, fork } from 'redux-saga/effects';
import { signupSaga } from '../components/signup';
import watchUserLoginAction from '../components/signin/sagas';

export default function* rootSaga() {
    yield all([fork(signupSaga), (watchUserLoginAction)]);
}
