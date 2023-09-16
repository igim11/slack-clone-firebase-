import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDupdW4IOGy-gcWO9L2loULhwrD7KEplPo",
    authDomain: "slack-clone-a976f.firebaseapp.com",
    projectId: "slack-clone-a976f",
    storageBucket: "slack-clone-a976f.appspot.com",
    messagingSenderId: "249674314567",
    appId: "1:249674314567:web:a0b7fe608f98d1afd29262",
    measurementId: "G-P2Y7CYEX20"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;