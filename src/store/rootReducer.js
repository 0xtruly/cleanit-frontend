import { combineReducers } from 'redux';
import reducer from '../components/signin/reducer';
import * as signup from '../components/signup';
import * as vendorSignin from '../components/vendorSignin';

const rootReducer = combineReducers({
    signIn: reducer,
    signup: signup.reducers,
    vendorSignin: vendorSignin.reducers,
});

export default rootReducer;
