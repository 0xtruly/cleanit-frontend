import { combineReducers } from 'redux';
import reducer from '../components/signin/reducer';

const rootReducer = combineReducers({
    signIn: reducer,
});

export default rootReducer;
