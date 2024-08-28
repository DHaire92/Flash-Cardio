import './css/App.css';
import './css/index.css';
import './css/styles.css';

function App() {
  return (
    <div>
      <img src="/paramedic_thinking.jpg" className="App-Image" alt="appImage" />
    <div className="App">
      <h1 className="header">Daily Dose</h1>
      <div>
      <header className="App-header">
        <img src="/EMS_Star.png" className="App-logo" alt="logo" />
        <div className="login">
          <LoginButton />
        </div>
      </header>
      </div>
    </div>
    </div>
  );
}

function LoginButton() {
  return  (
    <button className="button1">
      Login
    </button>
  );
}

function CreateAccountButton() {
  return (
    <button className="button1">
      Create Account
    </button>
  );
}

export default App;
