import { useNavigate } from 'react-router-dom';


//Navigation Buttons

export function CreateAccountNavButton() {
    const navigate = useNavigate();
    return  (
      <button className="button1" onClick={() => navigate('/signup')}>
        Create Account
      </button>
    );
  }

  export function EditorNavButton() {
    const navigate = useNavigate();
    return  (
      <button className="button1" onClick={() => navigate('/Editor')}>
        Editor
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

  export function BackToHomeButton() {
    const navigate = useNavigate();
    return  (
      <button className="button1" onClick={() => navigate('/Home')}>
        Back
      </button>
    );
  }