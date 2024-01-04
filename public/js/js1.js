// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJzKriYBZWqImryX1EjIjorpXO7oHyANk",
    authDomain: "vigilant-guru-356106.firebaseapp.com",
    projectId: "vigilant-guru-356106",
    storageBucket: "vigilant-guru-356106.appspot.com",
    messagingSenderId: "507355988437",
    appId: "1:507355988437:web:abef86ea42b0bde8c37d5c",
    measurementId: "G-9Z65P3QDSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
