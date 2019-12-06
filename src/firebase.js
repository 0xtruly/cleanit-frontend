import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    measurementId: process.env.REACT_APP_FIREBASE_MSG_ID,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
    projectId: 'cleanit-7147d',
    storageBucket: process.env.REACT_APP_FIREBASE_STR_BUCKET,
};

export const loginToFirebase = firebase.initializeApp(firebaseConfig);

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

if (process.env.NODE_ENV === 'test') {
    loginToFirebase.auth().setPersistence(loginToFirebase.auth.Auth.Persistence.NONE);
} else {
    loginToFirebase.auth().setPersistence(loginToFirebase.auth.Auth.Persistence.LOCAL);
}
