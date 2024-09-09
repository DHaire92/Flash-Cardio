import { useNavigate } from 'react-router-dom';


//Navigation Buttons

export function CreateAccountButton() {
    const navigate = useNavigate();
    return  (
      <button className="button1" onClick={() => navigate('/signup')}>
        Create Account
      </button>
    );
  }

  export function BackToLoginButton() {
    const navigate = useNavigate();
    return  (
      <button className="button1" onClick={() => navigate('/')}>
        Back
      </button>
    );
  }