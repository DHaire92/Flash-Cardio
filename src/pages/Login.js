import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { CreateAccountNavButton } from "../components/NavigationButtons";

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
        <h1 className="header">Login</h1>
        <header className="App-header">
          <img src="/runner.png" className="App-logo" alt="logo" />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <div>
          <button className="button1" onClick={handleSignIn}>Sign In</button>
          </div>
          <div>
            <CreateAccountNavButton />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </header>
      </div>
  );
}

export default Login;
