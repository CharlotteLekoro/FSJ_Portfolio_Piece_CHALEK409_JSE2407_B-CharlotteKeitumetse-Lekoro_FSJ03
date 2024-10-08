// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbOsafpWQYtCwjZArMESOAjEMZb5dDWeU",
  authDomain: "fsj03-89680.firebaseapp.com",
  projectId: "fsj03-89680",
  storageBucket: "fsj03-89680.appspot.com",
  messagingSenderId: "154171079401",
  appId: "1:154171079401:web:ffe75278861d88c47cce78",
  measurementId: "G-QG7ELEL8YK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);