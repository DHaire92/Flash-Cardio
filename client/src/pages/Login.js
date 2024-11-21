import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { CreateAccountNavButton } from "../components/button/NavigationButtons";
import Header from "../components/header/Header"
import {Link} from 'react-router-dom';
import logo from '../images/FCLogo1.png';

console.log("Rendering Login Component");

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Signed in successfully", user);
        navigate('Home');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  
  return (
      <div className="App">
        <Header>Login</Header>
        <header className="App-header">
          <Link to='/' className="logo-link">
            <img src ={logo} alt="Logo" className="logo-image"/>
          </Link>
          <div className="login-input-header"> {/* div 1 */}
            <header className="centered-login"> FlashCardio </header>
            <input 
              className='basic-input'
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              className='basic-input'
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

        <div className="button-row">
          <button className="main-button" onClick={handleSignIn}>Sign In</button>
            <CreateAccountNavButton /> 
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </header>
      </div>
  );
}

export default Login;
