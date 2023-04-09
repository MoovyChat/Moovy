import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCqvcYWcvSpwFJrT-zls8LIFv3ovu9lBIk',
  authDomain: 'netflix-comments-357200.firebaseapp.com',
  projectId: 'netflix-comments-357200',
  storageBucket: 'netflix-comments-357200.appspot.com',
  messagingSenderId: '596322814794',
  appId: '1:596322814794:web:7ff40e1b178548308dcfb3',
  measurementId: 'G-D9XS9MB3K3',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
