import * as firebase from 'firebase';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
};

export const firebaseApp = firebase.initializeApp(config);
export const db = firebaseApp.firestore();

export const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signUpWithGoogle = () => auth.signInWithPopup(provider);

export const signUpWithEmail = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password);
};

export default firebase;

