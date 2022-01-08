// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD8jEQ9wKzg2x3o-fEMVsin2uoz9rnSd48",
    authDomain: "invoice-app-f5d36.firebaseapp.com",
    projectId: "invoice-app-f5d36",
    storageBucket: "invoice-app-f5d36.appspot.com",
    messagingSenderId: "261745019507",
    appId: "1:261745019507:web:b51cab4fd1498df9b17806"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();