// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuhvTdxS7ra1ZRH0JCRFLzoGwFET-RekE",
  authDomain: "ema-jhon-aec38.firebaseapp.com",
  projectId: "ema-jhon-aec38",
  storageBucket: "ema-jhon-aec38.appspot.com",
  messagingSenderId: "304539459080",
  appId: "1:304539459080:web:a2acd87a931ae643717bbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;