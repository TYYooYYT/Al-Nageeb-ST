
// Import the functions you need from the SDKs you need 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ مهم للمصادقة
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2RJfr0JDcPULeYzWkRxvFDNJPw-eAdz8",
  authDomain: "ahmed-al-nageeb.firebaseapp.com",
  projectId: "ahmed-al-nageeb",
  storageBucket: "ahmed-al-nageeb.appspot.com",
  messagingSenderId: "392333502263",
  appId: "1:392333502263:web:63e16e17a5a4c2e4c25cb2",
  measurementId: "G-ZWHC2TFL1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); // ✅ هذا هو السطر المطلوب
