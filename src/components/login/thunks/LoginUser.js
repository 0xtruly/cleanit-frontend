import { requestLogin, receiveLogin, loginError } from '../actions';
import loginToFirebase from '../firebase';

/**
 * Login User thunk dispatching actions from Firebase Auth
 *
 * @constant
 * @param {email} email
 * @param {password} password
 */
export const loginUser = (email, password) => dispatch => {
    dispatch(requestLogin());
    loginToFirebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch(receiveLogin(user));
        })
        .catch(error => {
            // Do something with the error if you want!
            dispatch(loginError(error));
        });
};
