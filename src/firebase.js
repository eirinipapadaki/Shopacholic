import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDqcsgvRAgsnyVuVhh1BtEdk4ZJy3qQnwY",
  authDomain: "shopacholic-eb001.firebaseapp.com",
  databaseURL: "https://shopacholic-eb001.firebaseio.com",
  projectId: "shopacholic-eb001",
  storageBucket: "shopacholic-eb001.appspot.com",
  messagingSenderId: "681654762363",
  appId: "1:681654762363:web:f2bfab90610f3b0078dbde",
  measurementId: "G-JXCW6EZMD8"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { auth };