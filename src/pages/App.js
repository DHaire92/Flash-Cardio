import '../css/App.css';
import '../css/index.css';
import '../css/styles.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import SignIn from './Login.js'; 
import SignUp from './CreateAccount.js'; 
import Home from './Home.js'; 

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL41MjROS4GX_w1-14K95aQ_U1tMKAGe4",
  authDomain: "daily-dose-d5868.firebaseapp.com",
  projectId: "daily-dose-d5868",
  storageBucket: "daily-dose-d5868.appspot.com",
  messagingSenderId: "90535038506",
  appId: "1:90535038506:web:19b8fd89a5ed882d4f3d53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  return (
      <Routes>
        <Route path='*' element={<SignIn />} />
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/Home" element={<Home />} />
      </Routes>

  );
}


export default App;
