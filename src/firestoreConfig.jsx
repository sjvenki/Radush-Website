import { getApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import {
  getFunctions,
  connectFunctionsEmulator,
  httpsCallable,
} from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAOPt2A9lXl8HFfZtJoqlAKjMm7l7t9B4U",
  authDomain: "radush-54ec0.firebaseapp.com",
  projectId: "radush-54ec0",
  storageBucket: "radush-54ec0.appspot.com",
  messagingSenderId: "1038089777758",
  appId: "1:1038089777758:web:3bdbdf47db09d861483acf",
  measurementId: "G-CMYQCXMYEN",
};

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_ID,
//   measurementId: import.meta.env.VITE_MEASUREMENT_ID,
// };
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);

initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const functions = getFunctions();
connectFunctionsEmulator(functions, "127.0.0.1", 5001);
connectAuthEmulator(auth, "http://127.0.0.1:9099");
connectFirestoreEmulator(db, "127.0.0.1", 8080);

//httpsCallable
export const createsOrder = httpsCallable(functions, "createsOrder");
export const validatePayment = httpsCallable(functions, "validatePayment");
export const testingFire = httpsCallable(functions, "testingFire");
getAnalytics();
