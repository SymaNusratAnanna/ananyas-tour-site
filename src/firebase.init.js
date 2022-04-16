// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAhTBIz8wC4ADHnsjClUqZ7YCCRCaZgUw",
  authDomain: "ananyas-tour-site.firebaseapp.com",
  projectId: "ananyas-tour-site",
  storageBucket: "ananyas-tour-site.appspot.com",
  messagingSenderId: "603504769544",
  appId: "1:603504769544:web:085131913758cb40adefbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;