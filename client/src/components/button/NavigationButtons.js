import { useNavigate } from 'react-router-dom';
import Button from './Button'

//Navigation Buttons
export function CreateAccountNavButton() {
    const navigate = useNavigate();
    return  (
      <Button text='Create Account' navigateTo='/signup' />
    );
  }

  export function EditorNavButton() {
    const navigate = useNavigate();
    return  (
      <Button text='Editor' navigateTo='/Editor' />
    );
  }

  export function BackToLoginButton() {
    const navigate = useNavigate();
    return  (
      <Button text='Back' navigateTo='/' />
    );
  }

  export function BackToHomeButton() {
    const navigate = useNavigate();
    return  (
      <Button text='Back' navigateTo='/Home' />
    );
  }