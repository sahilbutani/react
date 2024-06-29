// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgACW-QTcfDEgbT-V_ANuRGvUQZWiyCKI",
  authDomain: "demo123-789f7.firebaseapp.com",
  projectId: "demo123-789f7",
  storageBucket: "demo123-789f7.appspot.com",
  messagingSenderId: "643945058071",
  appId: "1:643945058071:web:05a807195ededc9a243152",
  databaseURL: "https://demo123-789f7-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
