// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyA09i9SVMrCsLx2g4khzfSdesxp2BbWAqc",
  authDomain: "api-firebase-335d4.firebaseapp.com",
  projectId: "api-firebase-335d4",
  storageBucket: "api-firebase-335d4.firebasestorage.app",
  messagingSenderId: "723516020975",
  appId: "1:723516020975:web:8ffb4bf7ca88428ec2a31a",
  measurementId: "G-Z3CKX5XPZN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
