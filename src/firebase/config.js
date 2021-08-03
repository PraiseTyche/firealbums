import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCmjQU-DcnbuEF3lguzEtqJxVRl1peWeqI",
  authDomain: "fire-albums-65466.firebaseapp.com",
  projectId: "fire-albums-65466",
  storageBucket: "fire-albums-65466.appspot.com",
  messagingSenderId: "798656970384",
  appId: "1:798656970384:web:303a99f50ce4e520a7e215",
};
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp };
