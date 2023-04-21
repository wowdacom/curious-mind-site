// Initialize Cloud Firestore through Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const apiKey = import.meta.env.VITE_FIRESTORAGE_KEY;
const apiSecret = import.meta.env.VITE_FIRESTORAGE_ID;

const firebaseApp = initializeApp({
  apiKey: apiKey,
  authDomain: 'none-chinese-a-year.firebaseapp.com',
  databaseURL: 'https://none-chinese-a-year-default-rtdb.firebaseio.com',
  projectId: 'none-chinese-a-year',
  storageBucket: 'none-chinese-a-year.appspot.com',
  messagingSenderId: '1048115582755',
  appId: apiSecret,
  measurementId: 'G-TZVQGP3ZDJ',
});

export const db = getFirestore();
