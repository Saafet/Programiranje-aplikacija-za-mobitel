// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiFDTx5vWu5JJJB162b9CI98WHpIDM4BI",
    authDomain: "mojaprvaaplikacija-7fad6.firebaseapp.com",
    projectId: "mojaprvaaplikacija-7fad6",
    storageBucket: "mojaprvaaplikacija-7fad6.firebasestorage.app",
    messagingSenderId: "469663844951",
    appId: "1:469663844951:web:12d1a4ceee5e7a7e1bb112",
    measurementId: "G-Q6EX5QWQGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);