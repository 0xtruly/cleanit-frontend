import { combineReducers } from 'redux';
import reducer from '../components/signin/reducer';
import * as signup from '../components/signup';

const rootReducer = combineReducers({
    signIn: reducer,
    signup: signup.reducers,
});

export default rootReducer;
