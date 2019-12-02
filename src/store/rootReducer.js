import { combineReducers } from 'redux';
import * as signup from '../components/signup';

const rootReducer = combineReducers({
    signup: signup.reducers,
});

export default rootReducer;
