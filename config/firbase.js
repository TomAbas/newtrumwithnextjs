// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrCu2KcuirmLuvVBuEiIIq1OcM0pbUJEI",
  authDomain: "trum-project.firebaseapp.com",
  projectId: "trum-project",
  storageBucket: "trum-project.appspot.com",
  messagingSenderId: "759986985964",
  appId: "1:759986985964:web:430af438ca26dd29883ec9",
  measurementId: "G-XQ5TRREDHN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app };
