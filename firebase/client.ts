// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaR1UuPMOiZCG15jAElqmXHDEpzLf8iVY",
  authDomain: "wiseprep-ee084.firebaseapp.com",
  projectId: "wiseprep-ee084",
  storageBucket: "wiseprep-ee084.firebasestorage.app",
  messagingSenderId: "726563037632",
  appId: "1:726563037632:web:d410f7de421e0ab9832825",
  measurementId: "G-WNCPPWW222",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
