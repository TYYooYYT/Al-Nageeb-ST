
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2RJfr0JDcPULeYzWkRxvFDNJPw-eAdz8",
  authDomain: "ahmed-al-nageeb.firebaseapp.com",
  projectId: "ahmed-al-nageeb",
  storageBucket: "ahmed-al-nageeb.firebasestorage.app",
  messagingSenderId: "392333502263",
  appId: "1:392333502263:web:63e16e17a5a4c2e4c25cb2",
  measurementId: "G-ZWHC2TFL1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);