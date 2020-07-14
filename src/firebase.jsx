import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxl27YFaUhWcAex6Z-ckV1g87JckQPTF8",
  authDomain: "shopandsave39.firebaseapp.com",
  databaseURL: "https://shopandsave39.firebaseio.com",
  projectId: "shopandsave39",
  storageBucket: "shopandsave39.appspot.com",
  messagingSenderId: "793594583862",
  appId: "1:793594583862:web:5f17637511d15ba3f93197",
  measurementId: "G-EDDP8G8NB1",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
