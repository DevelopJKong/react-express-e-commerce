// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FRIEBASE_API_KEY,
  authDomain: process.env.FRIEBASE_AUTH_DOMAIN,
  projectId: process.env.FRIEBASE_PROJECT_ID,
  storageBucket: process.env.FRIEBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FRIEBASE_MES_ID,
  appId: process.env.FRIEBASE_APP_ID,
  measurementId: process.env.FRIEBASE_MEASURE_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
