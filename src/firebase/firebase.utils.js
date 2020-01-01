import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB02EulcDX_o40A7gdfiNBW9j6E1SpC94g",
  authDomain: "trend-e-commerce.firebaseapp.com",
  databaseURL: "https://trend-e-commerce.firebaseio.com",
  projectId: "trend-e-commerce",
  storageBucket: "trend-e-commerce.appspot.com",
  messagingSenderId: "945230711415",
  appId: "1:945230711415:web:7ada852230a44bcd081472",
  measurementId: "G-C25B1KS4XB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
