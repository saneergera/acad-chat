import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAqDNQ8ih9hgIuNqs2jdNRUQDGzig7nZco",
  authDomain: "acad-chat.firebaseapp.com",
  projectId: "acad-chat",
  storageBucket: "acad-chat.appspot.com",
  messagingSenderId: "167560538569",
  appId: "1:167560538569:web:85a89366f43c83a5d02018"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
