// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "bills-40ddd.firebaseapp.com",
  projectId: "bills-40ddd",
  storageBucket: "bills-40ddd.appspot.com",
  messagingSenderId: "544648609967",
  appId: "1:544648609967:web:a548008ec062d58c12545a"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage }