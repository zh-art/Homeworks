// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn11qgrgnnNFiuOyirc76sOru7Sld9cNY",
  authDomain: "challenge-2499c.firebaseapp.com",
  projectId: "challenge-2499c",
  storageBucket: "challenge-2499c.appspot.com",
  messagingSenderId: "390557620392",
  appId: "1:390557620392:web:1e3008cfda74915c264a9d",
  measurementId: "G-7F7JM7RCSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const storage = getStorage(app);
const db = getFirestore();

export { app, auth, analytics, storage, db }