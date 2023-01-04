// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBgwfcbAJr5NjbmliKR4ly4GMuglfLWKE",
  authDomain: "schedulesync-204ac.firebaseapp.com",
  projectId: "schedulesync-204ac",
  storageBucket: "schedulesync-204ac.appspot.com",
  messagingSenderId: "279357997406",
  appId: "1:279357997406:web:76dec0f9f6b37b927c0fcf",
  measurementId: "G-ND58FKVEVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);

// const initializeAppIfNecessary = () => {
//     try {
//       return getApp()
//     } catch {
//       return initializeApp(firebaseConfig)
//     }
// }
// let app = initializeAppIfNecessary();
// const db = getFirestore();
// const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { auth, db };