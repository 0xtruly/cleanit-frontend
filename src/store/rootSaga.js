import { all } from 'redux-saga/effects';
import { signupSaga } from '../components/signup';
import watchUserLoginAction from '../components/signin/sagas';
import { vendorSigninSaga } from '../components/vendorSignin';

export default function* rootSaga() {
    yield all([signupSaga(), vendorSigninSaga(), watchUserLoginAction()]);
}
