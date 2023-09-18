import * as firebase from "firebase";
import "firebase/firestore";


const firebaseConfig = {

};

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth }