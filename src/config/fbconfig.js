import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/firebase-messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDdWvz_5PwlselhCHv8W7tawr3-7BR1evM",
  authDomain: "react-ptoject.firebaseapp.com",
  projectId: "react-ptoject",
  storageBucket: "react-ptoject.appspot.com",
  messagingSenderId: "679292841120",
  appId: "1:679292841120:web:c4eb11fc3717c68b7a6dc5",
  measurementId: "G-L3HKQMTF36",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshot: true });
export default firebase;
