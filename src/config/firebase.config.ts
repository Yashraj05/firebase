// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCNegG2kURSuCtLs9cKPExxGtcuN6rcl58',
  authDomain: 'my-new-web-app-ce424.firebaseapp.com',
  projectId: 'my-new-web-app-ce424',
  storageBucket: 'my-new-web-app-ce424.appspot.com',
  messagingSenderId: '859333011498',
  appId: '1:859333011498:web:c4ea99188a35362461fb53',
  measurementId: 'G-KM15670BDQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
