import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAlE88UgjP_MxlD-yFQR1RtNRWrZMS0048",
  authDomain: "disneyplus-clone-544cc.firebaseapp.com",
  projectId: "disneyplus-clone-544cc",
  storageBucket: "disneyplus-clone-544cc.firebasestorage.app",
  messagingSenderId: "33259040049",
  appId: "1:33259040049:web:12061edc86516741d89410",
  measurementId: "G-H68E8TTSNQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;