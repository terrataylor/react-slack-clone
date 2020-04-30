import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

  var config = {
    apiKey: "AIzaSyB3NVuO8DQHcvr6sAWbbEVClYzyxiV9nnQ",
    authDomain: "react-slack-clone-5f19f.firebaseapp.com",
    databaseURL: "https://react-slack-clone-5f19f.firebaseio.com",
    projectId: "react-slack-clone-5f19f",
    storageBucket: "react-slack-clone-5f19f.appspot.com",
    messagingSenderId: "880398799219",
    appId: "1:880398799219:web:cd0ecd00338efa0281b506",
    measurementId: "G-9CSYLBTGTW"
  };
firebase.initializeApp(config);

export default firebase;
