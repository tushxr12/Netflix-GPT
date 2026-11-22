// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZbiOdlJb5-82BIxY8tz8z1pLJV8kAsLc",
  authDomain: "netflix-gpt-83387.firebaseapp.com",
  projectId: "netflix-gpt-83387",
  storageBucket: "netflix-gpt-83387.firebasestorage.app",
  messagingSenderId: "642413816171",
  appId: "1:642413816171:web:05e089083256fa6bbcc42e",
  measurementId: "G-XWGQVQN283"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);