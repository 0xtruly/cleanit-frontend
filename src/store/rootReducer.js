import { combineReducers } from 'redux';
import reducer from '../components/login/reducer';

const rootReducer = combineReducers({
    login: reducer,
});

export default rootReducer;
