import * as firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_jpLTKETb3bpMVBLFzTy4ABsfijMj_Vo",
  authDomain: "shopnsave38.firebaseapp.com",
  databaseURL: "https://shopnsave38.firebaseio.com",
  projectId: "shopnsave38",
  storageBucket: "shopnsave38.appspot.com",
  messagingSenderId: "1045370244678",
  appId: "1:1045370244678:web:1c006b3413d5923d808447",
  measurementId: "G-YQ7LSE6JD1",
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
