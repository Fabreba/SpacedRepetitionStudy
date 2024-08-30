// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8_kWl-jhgNYEXmm8Dxnig6NHT595gVRY",
  authDomain: "spacedrepetitionstudy.firebaseapp.com",
  projectId: "spacedrepetitionstudy",
  storageBucket: "spacedrepetitionstudy.appspot.com",
  messagingSenderId: "17493198958",
  appId: "1:17493198958:web:7692e6dea5acbff66afe7f",
  measurementId: "G-8JJ4RB5Z04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
