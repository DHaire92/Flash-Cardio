import { useNavigate } from 'react-router-dom';
import Button from './Button'

//Navigation Buttons
export function CreateAccountNavButton() {
    const navigate = useNavigate();
    return  (
      <Button text='Create Account' navigateTo='/signup' />
    );
  }

  export function EditorNavButton({ folderEditData }) {
    const navigate = useNavigate();
  
    const handleNavigation = () => {
      navigate('/Editor', { state: { folderEditData } });
    };
  
    return (
      <Button text="Editor" onClick={handleNavigation} />
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