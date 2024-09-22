import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import SignIn from './Login.js'; 
import SignUp from './CreateAccount.js'; 
import Home from './Home.js'; 
import Editor from './Editor.js'
import '../global-styles/styles.css'

import { QuestionProvider } from '../components/questions/QuestionContext.js'; 

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgiJz7_FghUlvYq8VFkMAPUpzRzy_ZszY",
  authDomain: "flash-cardio.firebaseapp.com",
  projectId: "flash-cardio",
  storageBucket: "flash-cardio.appspot.com",
  messagingSenderId: "473027755612",
  appId: "1:473027755612:web:b799f3bf257954d1f77099",
  measurementId: "G-LWWZ269T7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  return (
    <QuestionProvider>
      <Routes>
        <Route path='*' element={<SignIn />} />
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Editor" element={<Editor />} />
      </Routes>
    </QuestionProvider>
  );
}


export default App;
