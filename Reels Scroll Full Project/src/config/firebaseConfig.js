
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaEpGJwpmyHZhKLR_BVzagZhDTGIWZ_68",
  authDomain: "loppi-app-real.firebaseapp.com",
  projectId: "loppi-app-real",
  storageBucket: "loppi-app-real.appspot.com",
  messagingSenderId: "63001039488",
  appId: "1:63001039488:web:2e5f7bfaf8874e55614c65",
  measurementId: "G-7D9XRFGE2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };