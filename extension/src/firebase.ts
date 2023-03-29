import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDfODpLbuJTAc2gpxF1Vwg73AQEdrcZGvc',
  authDomain: 'moovychat.firebaseapp.com',
  projectId: 'moovychat',
  storageBucket: 'moovychat.appspot.com',
  messagingSenderId: '486691720270',
  appId: '1:486691720270:web:4874ed54077a622acc471f',
  measurementId: 'G-6Q50KRH0BF',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
