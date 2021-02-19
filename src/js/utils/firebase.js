// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';
import firebaseCon from './apiKeys';
// Add the Firebase products that you want to use
import 'firebase/auth';

const firebaseConfig = firebaseCon;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const signUp = () => {
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      // Signed in
      // ...
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
};
