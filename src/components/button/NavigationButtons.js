import { useNavigate } from 'react-router-dom';
import Button from './Button'

//Navigation Buttons
export function CreateAccountNavButton() {
    const navigate = useNavigate();
    return  (
      <Button text='Create Account' navigateTo='/signup'></Button>
    );
  }

  export function EditorNavButton() {
    const navigate = useNavigate();
    return  (
      <Button text='Editor' navigateTo='/Editor'></Button>
    );
  }

  export function BackToLoginButton() {
    const navigate = useNavigate();
    return  (
      <Button text='Back' navigateTo='/'></Button>
    );
  }

  export function BackToHomeButton() {
    const navigate = useNavigate();
    return  (
      <Button text='Back' navigateTo='/Home'></Button>
    );
  }