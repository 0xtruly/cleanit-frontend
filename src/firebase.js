import * as firebase from 'firebase';
import 'firebase/auth';
import config from './firebaseConfig';

export const firebaseApp = firebase.initializeApp(config);
export const db = firebaseApp.firestore();

export const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signUpWithGoogle = () => auth.signInWithPopup(provider);

/**
 *
 * @param {string} email user email
 * @param {string} password user password
 * creates a user account with provided email
 * and password.
 */
export const signUpWithEmail = async (email, password) => {
    const req = await auth.createUserWithEmailAndPassword(email, password);
    return req;
};

export default firebase;
