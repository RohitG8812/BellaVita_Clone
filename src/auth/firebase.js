import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCP-56gvO-VE3-m9rcfQFIiLqRuZ0vusSw",
  authDomain: "bellavita-0.firebaseapp.com",
  projectId: "bellavita-0",
  storageBucket: "bellavita-0.appspot.com",
  messagingSenderId: "967085873779",
  appId: "1:967085873779:web:286eb17392b78e9556e806",
  measurementId: "G-1D5EWYE018",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
