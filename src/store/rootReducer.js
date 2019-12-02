import { combineReducers } from 'redux';
import * as signup from '../components/signup';
import reducer from '../components/login/reducer';

const rootReducer = combineReducers({
    signIn: reducer,
    signup: signup.reducers,
});

export default rootReducer;
