import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "spirited-score-review",
  storageBucket: "spirited-score-review.appspot.com",
  messagingSenderId: "132254638223",
  appId: "1:132254638223:web:06d337c43e2d024c0490fa",
  measurementId: "G-G6TF5CRG1M"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);