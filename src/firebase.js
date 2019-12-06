import * as firebase from 'firebase';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    measurementId: process.env.REACT_APP_FIREBASE_MSG_ID,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
    projectId: 'cleanit-7147d',
    storageBucket: process.env.REACT_APP_FIREBASE_STR_BUCKET,
};

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
