import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import SignIn from './Login.js'; 
import SignUp from './CreateAccount.js'; 
import Home from './Home.js'; 
import Editor from './Editor.js';
import Viewer from './Viewer.js';
import '../global-styles/styles.scss'

import { QuestionProvider } from '../components/questions/QuestionContext.js'; 

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
const auth = getAuth(app);

function App() {
  return (
    <QuestionProvider>
      <Routes>
        <Route path='*' element={<SignIn />} />
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/Home" element={<Home />} />
        <Route path="/Editor/*" element={<Editor />} />
        <Route path="/Viewer" element={<Viewer />} />
      </Routes>
    </QuestionProvider>
  );
}

export { db };
export default App;
