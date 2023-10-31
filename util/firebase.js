import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  // apiKey:  process.env.apiKey,
  // authDomain:  process.env.authDomain,
  // projectId: process.env.projectId,
  // storageBucket: process.env.storageBucket,
  // messagingSenderId:  process.env.messagingSenderId,
  // appId:  process.env.appid,
  // measurementId: process.env.measurementId
  apiKey: "AIzaSyCFvztaOw03GLYYKzPDXpIKtNHVLKxUCgg",
  authDomain: "fir-con-8961c.firebaseapp.com",
  projectId: "fir-con-8961c",
  storageBucket: "fir-con-8961c.appspot.com",
  messagingSenderId: "456775386119",
  appId: "1:456775386119:web:e87f8225e3f3eee64416a2",
  measurementId: "G-4D718J3RET"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);