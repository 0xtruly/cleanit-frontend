import { verifyRequest, receiveLogin, verifySuccess } from '../actions';
import loginToFirebase from '../../../firebase';

export const verifyAuth = () => dispatch => {
    dispatch(verifyRequest());
    loginToFirebase.auth().onAuthStateChanged(user => {
        if (user !== null) {
            dispatch(receiveLogin(user));
        }
        dispatch(verifySuccess());
    });
};
