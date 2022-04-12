// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXNKyGJ7ZfosIqjPPFs-wPJm3R2AZqdnY",
  authDomain: "simple-spa-cd2cb.firebaseapp.com",
  projectId: "simple-spa-cd2cb",
  storageBucket: "simple-spa-cd2cb.appspot.com",
  messagingSenderId: "548325048548",
  appId: "1:548325048548:web:15112a3c3163f93ad6ecf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;