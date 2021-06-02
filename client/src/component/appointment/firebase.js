import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/storage'; 

const config = {
    apiKey: "AIzaSyCLqLxzHR7-bQ6aYfkoW_4ad6UBJmSzZqE",
    authDomain: "hospital-system-60216.firebaseapp.com",
    projectId: "hospital-system-60216",
    storageBucket: "hospital-system-60216.appspot.com",
    messagingSenderId: "530756682098",
    appId: "1:530756682098:web:1a3725365c191dfa039deb"
  };

  firebase.initializeApp(config);

  export default firebase;
