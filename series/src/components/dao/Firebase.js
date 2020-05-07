import firebase from 'firebase';
//import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC07jlc08zjqGMfqWFSWjZY8PP2S4FYJ9c",
  authDomain: "series-sample.firebaseapp.com",
  databaseURL: "https://series-sample.firebaseio.com",
  projectId: "series-sample",
  storageBucket: "series-sample.appspot.com",
  messagingSenderId: "908882369785",
  appId: "1:908882369785:web:ae8ce9c3f899e1bac39628",
  measurementId: "G-ZEJ756N5NG"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
