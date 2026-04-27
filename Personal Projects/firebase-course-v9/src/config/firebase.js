// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4puH53NUS-SyozliSN8rSEiEiQuGGVhY",
  authDomain: "fir-course-f3f4a.firebaseapp.com",
  projectId: "fir-course-f3f4a",
  storageBucket: "fir-course-f3f4a.firebasestorage.app",
  messagingSenderId: "933309121916",
  appId: "1:933309121916:web:dde0f555b65530105cd0f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
