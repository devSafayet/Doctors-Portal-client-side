// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB769wnZSOnnNAFPAX0PRJNx9tW9q1zbRM",
  authDomain: "doctors-portal-64105.firebaseapp.com",
  projectId: "doctors-portal-64105",
  storageBucket: "doctors-portal-64105.appspot.com",
  messagingSenderId: "656880924029",
  appId: "1:656880924029:web:52232408ce4430fc5d4814"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;