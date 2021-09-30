import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCNEPn-BYPjpnexYxgnmVSsgzJz8MamA4M',
  authDomain: 'clone-5c54a.firebaseapp.com',
  projectId: 'clone-5c54a',
  storageBucket: 'clone-5c54a.appspot.com',
  messagingSenderId: '1000339050603',
  appId: '1:1000339050603:web:d16a424c52d42c90da612e',
  measurementId: 'G-N836ZJJPZH',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
