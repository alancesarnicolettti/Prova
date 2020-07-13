import * as firebase from 'firebase';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyDqihhqjJB1dS9neH2KnAAFluxF1vIXDQA",
    authDomain: "provatrello-32e46.firebaseapp.com",
    databaseURL: "https://provatrello-32e46.firebaseio.com",
    projectId: "provatrello-32e46",
    storageBucket: "provatrello-32e46.appspot.com",
    messagingSenderId: "743840379606",
    appId: "1:743840379606:web:ee42aa91f8efd155ae0f77",
    measurementId: "G-4992GKSVEN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const database = firebase.firestore();