import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDBjbj3GS-BZQwystCvdyB27yvJlmwC_S8",
  authDomain: "signuppage-3de25.firebaseapp.com",
  projectId: "signuppage-3de25",
  storageBucket: "signuppage-3de25.appspot.com",
  messagingSenderId: "619013941126",
  appId: "1:619013941126:web:b480afcf8a6fe85070ee07",
  databaseURL : "https://signuppage-3de25-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);