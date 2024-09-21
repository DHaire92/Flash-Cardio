import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { BackToLoginButton } from '../components/button/NavigationButtons';
import Header from "../components/header/Header"
import Button from '../components/button/Button';
import '../components/button/button.css'

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const handleSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        setMessage(`Signed up as ${user.email}`);
        setError(null);
        // Redirect or update UI if needed
      })
      .catch((error) => {
        setError(error.message);
        setMessage("");
      });
  };

  return (
    <div className="App">
      <Header>Create Account</Header>
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
      <button className="main-button" onClick={handleSignUp}>Sign Up</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
      <div>
        <BackToLoginButton />
      </div>
    </div>
  );
}

export default SignUp;
