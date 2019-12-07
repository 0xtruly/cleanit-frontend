import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import * as firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    measurementId: process.env.REACT_APP_FIREBASE_MSG_ID,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
    projectId: 'cleanit-7147d',
    storageBucket: process.env.REACT_APP_FIREBASE_STR_BUCKET,
};

export const loginToFirebase = firebase.initializeApp(firebaseConfig);
export const auth = loginToFirebase.auth();

/**
 * Initializing the firebaseui
 *
 * @constant
 */
const firebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

/**
 * firebaseUI config rules
 *
 * @constant
 */
const uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult() {
            return true;
        },
    },
    signInOptions: [
        {
            customParameters: {
                // Forces account selection even when one account
                // is available.
                prompt: 'select_account',
            },
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            scopes: [
                'email',
            ],
        },
        {
            customParameters: {
                // Forces password re-entry.
                auth_type: 'reauthenticate',
            },
            provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            scopes: [
                'public_profile',
                'email',
            ],
        },
        firebase.auth.TwitterAuthProvider.PROVIDER_ID, // Twitter does not support scopes.
    ],
    signInSuccessUrl: 'http://localhost:3000/dashboard',
};
export const startFirebaseUI = firebaseUI.start('#social-card-auth-container', uiConfig);

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

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

