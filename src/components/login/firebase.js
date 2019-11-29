import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    measurementId: process.env.REACT_APP_FIREBASE_MSG_ID,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STR_BUCKET,
};

export const loginToFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = loginToFirebase.firestore();
export const db = baseDb;
