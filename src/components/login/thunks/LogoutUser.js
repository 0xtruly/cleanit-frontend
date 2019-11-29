import { requestLogout, receiveLogout, logoutError } from '../actions';
import loginToFirebase from '../firebase';

export const logoutUser = () => dispatch => {
    dispatch(requestLogout());
    loginToFirebase.auth().signOut()
        .then(() => {
            dispatch(receiveLogout());
        })
        .catch(error => {
            // Do something with the error if you want!
            dispatch(logoutError(error));
        });
};
