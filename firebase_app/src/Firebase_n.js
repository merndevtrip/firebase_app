// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUsRp1KXNi9rKQzZmxIkaHOEpU5sfjvdQ",
  authDomain: "oauthlogin-88be6.firebaseapp.com",
  projectId: "oauthlogin-88be6",
  storageBucket: "oauthlogin-88be6.appspot.com",
  messagingSenderId: "822630770531",
  appId: "1:822630770531:web:e5ebaa19e048ed3ac2d556",
  measurementId: "G-EVR7HTQH7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db};