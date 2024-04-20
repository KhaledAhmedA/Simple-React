// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADqBd9tJtWA6ylCeoWa01sQull2_MzA4A",
    authDomain: "reactauthproject-b969f.firebaseapp.com",
    projectId: "reactauthproject-b969f",
    storageBucket: "reactauthproject-b969f.appspot.com",
    messagingSenderId: "103829436565",
    appId: "1:103829436565:web:727aa71bc5397676b2439c",
    measurementId: "G-T7509957FR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);

export default app;