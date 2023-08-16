import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  //GithubAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBFuxnq7sCbQGjTF80dvf9lYd8mmaOqBww",
  authDomain: "react-web-45361.firebaseapp.com",
  projectId: "react-web-45361",
  storageBucket: "react-web-45361.appspot.com",
  messagingSenderId: "823806748716",
  appId: "1:823806748716:web:f8c91d1dc45cbadc0a0989",
  measurementId: "G-XY35RF4WEB"
};

const app = initializeApp(firebaseConfig);
const googleAuthProvider = new GoogleAuthProvider();
//const githubAuthProvider = new GithubAuthProvider();

export {
  app,
  googleAuthProvider,
  //githubAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut
};