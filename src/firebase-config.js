// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4vM87myWOpbY5O1vUzSx9gP2mpadx3l8",
  authDomain: "buoi5-lab1-a8f51.firebaseapp.com",
  projectId: "buoi5-lab1-a8f51",
  storageBucket: "buoi5-lab1-a8f51.appspot.com",
  messagingSenderId: "813442227174",
  appId: "1:813442227174:web:9184328090008aa8fd1427",
  measurementId: "G-1DN5ZJ1SS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);