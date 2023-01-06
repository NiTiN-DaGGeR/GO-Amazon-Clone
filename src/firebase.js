<<<<<<< Updated upstream
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAedCet8uU4URlGmOlhZdOy9Nbd-0ePVxs",
    authDomain: "clone-bfd61.firebaseapp.com",
    projectId: "clone-bfd61",
    storageBucket: "clone-bfd61.appspot.com",
    messagingSenderId: "201221707515",
    appId: "1:201221707515:web:8618f60b7c53f8a60a025e",
    measurementId: "G-X07TZKFFPL"
  };
=======
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAedCet8uU4URlGmOlhZdOy9Nbd-0ePVxs",
  authDomain: "clone-bfd61.firebaseapp.com",
  projectId: "clone-bfd61",
  storageBucket: "clone-bfd61.appspot.com",
  messagingSenderId: "201221707515",
  appId: "1:201221707515:web:8618f60b7c53f8a60a025e",
  measurementId: "G-X07TZKFFPL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
>>>>>>> Stashed changes
