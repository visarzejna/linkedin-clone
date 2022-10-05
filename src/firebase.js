import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAPxgKyrjuDvAdtmU8Qwpma6AM6hsP0wPw",
  authDomain: "linkedin-clone-eee22.firebaseapp.com",
  projectId: "linkedin-clone-eee22",
  storageBucket: "linkedin-clone-eee22.appspot.com",
  messagingSenderId: "169441625766",
  appId: "1:169441625766:web:1d8bb5338d5a8b94d85667",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
