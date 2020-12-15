/**
 * Firebase Login
 * Reactify comes with built in firebase login feature
 * You Need To Add Your Firsebase App Account Details Here
 */

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC44EVqETvbIjK4r2jy6QxLGaP7r6plKN8",
    authDomain: "doclike-288918.firebaseapp.com",
    databaseURL: "https://doclike-288918.firebaseio.com",
    projectId: "doclike-288918",
    storageBucket: "doclike-288918.appspot.com",
    messagingSenderId: "416886050357",
    appId: "1:416886050357:web:ef59af5691b88eac042b7c",
    measurementId: "G-4LE6XN8H9Q"
};


firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
