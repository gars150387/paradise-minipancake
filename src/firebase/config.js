// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGEFS7DfpNiIt3HQu9RngO39jhvhBfR84",
  authDomain: "paradise-minipancakes-app.firebaseapp.com",
  projectId: "paradise-minipancakes-app",
  storageBucket: "paradise-minipancakes-app.appspot.com",
  messagingSenderId: "388129135059",
  appId: "1:388129135059:web:bedc411feb083cf0e43726",
  measurementId: "G-6P3HKE8XEB"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )
const FireabseAnalytics = getAnalytics(FirebaseApp);