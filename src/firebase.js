import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAcOF6pycyN3fiSbsAqlbjmi_JT1KK1RMo",
  authDomain: "clone-2bedd.firebaseapp.com",
  projectId: "clone-2bedd",
  storageBucket: "clone-2bedd.appspot.com",
  messagingSenderId: "58663572063",
  appId: "1:58663572063:web:55824a59057e14310a41ea"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const firestore = firebase.firestore()
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp()

export { db, auth, provider, firestore, serverTimestamp }

