import { all } from 'redux-saga/effects';
import { signupSaga } from '../components/signup';
import { vendorSigninSaga } from '../components/vendorSignin';
import watchUserLoginAction from '../components/signin/sagas';

export default function* rootSaga() {
    yield all([signupSaga(), vendorSigninSaga(), watchUserLoginAction()]);
}
