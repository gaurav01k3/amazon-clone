import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz8R7MGqezPGX6Fl7KiN3NeU3MyIoAFXI",
  authDomain: "challenge-80484.firebaseapp.com",
  projectId: "challenge-80484",
  storageBucket: "challenge-80484.appspot.com",
  messagingSenderId: "245754693367",
  appId: "1:245754693367:web:3c3e0de0f7d264eb3835f2",
  measurementId: "G-QSH8FLWEH1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
