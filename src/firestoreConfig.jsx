import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOPt2A9lXl8HFfZtJoqlAKjMm7l7t9B4U",
  authDomain: "radush-54ec0.firebaseapp.com",
  projectId: "radush-54ec0",
  storageBucket: "radush-54ec0.appspot.com",
  messagingSenderId: "1038089777758",
  appId: "1:1038089777758:web:3bdbdf47db09d861483acf",
  measurementId: "G-CMYQCXMYEN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const auth = getAuth();
// export const db = getFirestore();
// connectAuthEmulator(auth, "http://127.0.0.1:8090");
// connectFirestoreEmulator(db, "127.0.0.1", 8085);

getAnalytics();
