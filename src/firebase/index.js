import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDjS35GTrxtjwqsEADcqkhgdIvLK8K0Lfc",
    authDomain: "tesreactnative.firebaseapp.com",
    databaseURL: "https://tesreactnative.firebaseio.com",
    projectId: "tesreactnative",
    storageBucket: "tesreactnative.appspot.com",
    messagingSenderId: "1076085938287",
    appId: "1:1076085938287:web:adeb46317a2fa5c7"
  };
  // Initialize Firebase
 export const Fire = firebase.initializeApp(firebaseConfig);