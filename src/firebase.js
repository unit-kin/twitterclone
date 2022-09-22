import firebase from "firebase";

const firebaseConfig = {
 
  apiKey: "AIzaSyCroZObN6N0bTrsKo8FBnVbh0H4O8R9Lp4",
  authDomain: "twitter-clone-1ec4c.firebaseapp.com",
  projectId: "twitter-clone-1ec4c",
  storageBucket: "twitter-clone-1ec4c.appspot.com",
  messagingSenderId: "408248126784",
  appId: "1:408248126784:web:9c8f5cc9ab841ed35d7ea5",

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;




