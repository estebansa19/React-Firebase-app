import firebase from 'firebase/app';
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCpxY6bjBpFNFLHuUHzRQZTpeAi9MAu0fE",
  authDomain: "react-firebase-crud-c0f54.firebaseapp.com",
  databaseURL: "https://react-firebase-crud-c0f54.firebaseio.com",
  projectId: "react-firebase-crud-c0f54",
  storageBucket: "react-firebase-crud-c0f54.appspot.com",
  messagingSenderId: "696014968092",
  appId: "1:696014968092:web:b8d6fad33d8a58aa0b56d9"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();