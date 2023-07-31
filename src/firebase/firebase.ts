// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBW7a_8jJT6WUkltyN-OvBvn1Co-0hpQlQ",
    authDomain: "leetclone-95bfc.firebaseapp.com",
    projectId: "leetclone-95bfc",
    storageBucket: "leetclone-95bfc.appspot.com",
    messagingSenderId: "701630245006",
    appId: "1:701630245006:web:1ee4af18a5c0357cc181df"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };