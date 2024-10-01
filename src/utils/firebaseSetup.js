import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw6pEqLnR0fOXYZqYQpYfp2nZo9_TzH0U",
  authDomain: "netflix-gpt-d1081.firebaseapp.com",
  projectId: "netflix-gpt-d1081",
  storageBucket: "netflix-gpt-d1081.appspot.com",
  messagingSenderId: "132095327202",
  appId: "1:132095327202:web:55f80a350c2102d4c997bb",
  measurementId: "G-3SFTYK2KDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); // Export auth as a named export
