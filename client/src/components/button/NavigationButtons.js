import { useNavigate } from 'react-router-dom';
import Button from './Button'

//Navigation Buttons
export function CreateAccountNavButton() {
    return  (
      <Button text='Create Account' navigateTo='/signup' />
    );
  }

  export function EditorNavButton() {
    const navigate = useNavigate();
  
    const handleNavigation = () => {
      navigate('/Editor');
    };
  
    return (
      <Button text="Editor" onClick={handleNavigation} />
    );
  }

  export function ViewerNavButton() {
    const navigate = useNavigate();
    const handleNavigation = () => {
      navigate('/Viewer');
    };

    return (
      <Button text="Viewer" onClick={handleNavigation} />
    )
  }

  export function BackToLoginButton() {
    return  (
      <Button text='Back' navigateTo='/' />
    );
  }

  export function BackToHomeButton() {
    return  (
      <Button text='Back' navigateTo='/Home' />
    );
  }