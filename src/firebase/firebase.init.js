// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY0NNy98mbMB7I3awypx_lBeUO5CncnkI",
  authDomain: "coffee-store-21ec5.firebaseapp.com",
  projectId: "coffee-store-21ec5",
  storageBucket: "coffee-store-21ec5.firebasestorage.app",
  messagingSenderId: "791430661461",
  appId: "1:791430661461:web:3c6f6eddae2e7db922dbdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);