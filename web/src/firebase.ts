import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCqvcYWcvSpwFJrT-zls8LIFv3ovu9lBIk',
  authDomain: 'netflix-comments-357200.firebaseapp.com',
  projectId: 'netflix-comments-357200',
  storageBucket: 'netflix-comments-357200.appspot.com',
  messagingSenderId: '596322814794',
  appId: '1:596322814794:web:abfb1a5ee5732ae28dcfb3',
  measurementId: 'G-N7MNCE11FQ',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
