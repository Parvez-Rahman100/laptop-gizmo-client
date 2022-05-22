// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNuwOZLVjSd1O-EQsIrSnNa1Mw6H7WSUo",
  authDomain: "laptop-gizmo.firebaseapp.com",
  projectId: "laptop-gizmo",
  storageBucket: "laptop-gizmo.appspot.com",
  messagingSenderId: "497617633146",
  appId: "1:497617633146:web:4b5b3a5614fdd8355760c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;