// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfFwXb-QhqurCm1qJrUyclSj3XTvPnxMU",
  authDomain: "inventorymanagement-3229c.firebaseapp.com",
  projectId: "inventorymanagement-3229c",
  storageBucket: "inventorymanagement-3229c.appspot.com",
  messagingSenderId: "94453330049",
  appId: "1:94453330049:web:46a412b4e787c346085d80",
  measurementId: "G-WFG5933Q76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}