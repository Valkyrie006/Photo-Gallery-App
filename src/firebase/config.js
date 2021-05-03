import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDw-XAmfh3X4E6l1yRLwn9VS1Jpi_0EmR4",
    authDomain: "photo-gallery-app-react-8f6a3.firebaseapp.com",
    projectId: "photo-gallery-app-react-8f6a3",
    storageBucket: "photo-gallery-app-react-8f6a3.appspot.com",
    messagingSenderId: "474843798639",
    appId: "1:474843798639:web:25985087a1cd2d4184819a"
  };

// Initialize firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };