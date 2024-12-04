// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLxyy0vqdmwAWNW0qeiMBvnG5XIXc33u0",
  authDomain: "sport-flex-51779.firebaseapp.com",
  projectId: "sport-flex-51779",
  storageBucket: "sport-flex-51779.firebasestorage.app",
  messagingSenderId: "158939132227",
  appId: "1:158939132227:web:cf1f7d659e8ceeb8a2bff6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
