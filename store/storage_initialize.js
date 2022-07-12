import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDa4EAZpUtMcU4ct7XIjzmALae3YPVIFN0",
  authDomain: "none-chinese-a-year.firebaseapp.com",
  databaseURL: "https://none-chinese-a-year-default-rtdb.firebaseio.com",
  projectId: "none-chinese-a-year",
  storageBucket: "none-chinese-a-year.appspot.com",
  messagingSenderId: "1048115582755",
  appId: "1:1048115582755:web:857e1bc1f3ceb6d4591e96",
  measurementId: "G-TZVQGP3ZDJ",
});

export const db = getFirestore();
