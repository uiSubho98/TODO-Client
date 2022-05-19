// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9l13w4uwQohAOMs8ZtRrNj6iQIZhHDio",
  authDomain: "to-do-list-47309.firebaseapp.com",
  projectId: "to-do-list-47309",
  storageBucket: "to-do-list-47309.appspot.com",
  messagingSenderId: "272991269295",
  appId: "1:272991269295:web:4413dcf7609954b939bf5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);

export default auth;