import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBL9XtKzOhysCD7oucCOdDjxcek3ZBonmg",
    authDomain: "discord-clone-debf0.firebaseapp.com",
    databaseURL: "https://discord-clone-debf0.firebaseio.com",
    projectId: "discord-clone-debf0",
    storageBucket: "discord-clone-debf0.appspot.com",
    messagingSenderId: "875327505432",
    appId: "1:875327505432:web:598c78f34e60436c7aaf6d",
    measurementId: "G-0H5SLEHDQL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider}
  export default db