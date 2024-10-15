const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8m0aYQghcbkVakuENE-KFob7t_dMRGIk",
    authDomain: "flashcardio-594f2.firebaseapp.com",
    projectId: "flashcardio-594f2",
    storageBucket: "flashcardio-594f2.appspot.com",
    messagingSenderId: "985978106813",
    appId: "1:985978106813:web:af85194d9ca91f96ae58d4",
    measurementId: "G-27LN8RVNDB"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  module.exports = { db };