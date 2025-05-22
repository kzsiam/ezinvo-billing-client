// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-SHemvA7Dmu6lrZ041PVCdMGsYqeQDJU",
  authDomain: "ezinvo-billing-client.firebaseapp.com",
  projectId: "ezinvo-billing-client",
  storageBucket: "ezinvo-billing-client.firebasestorage.app",
  messagingSenderId: "945052183145",
  appId: "1:945052183145:web:d757826cc444c688c790f8",
  measurementId: "G-XGSGGH5E04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;